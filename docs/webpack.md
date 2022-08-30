# 项目构建打包优化

目录
[[toc]]

## 构建时间优化

### thread-loader

> 多进程打包，可以大大提高构建的速度，使用方法是将 `thread-loader` 放在比较费时间的 `loader` 之前，比如 `babel-loader`

### cache-loader

> 多进程打包，可以大大提高构建的速度，使用方法是将 `cache-loader` 放在比较费时间的 `loader` 之前，比如 `babel-loader`

```shell
# 下载依赖
yarn add thread-loader cache-loader -D
```

```js
// 由于启动项目和打包项目都需要加速，所以配置在 webpack.base.js
{
  test: /\.js$/,
  use: [
    'cache-loader',
    'thread-loader',
    'babel-loader'
  ],
}
```

### exclude & include

- exclude：不需要处理的文件
- include：需要处理的文件

```js
// webpack.base.js
{
  test: /\.js$/,
  include: path.resolve(__dirname, '../src'),
  exclude: /node_modules/,
  use: [
    'cache-loader',
    'thread-loader',
    'babel-loader'
  ],
}
```

### 构建区分环境

- 开发环境：去除代码压缩、gzip、体积分析等优化的配置，大大提高构建速度
- 生产环境：需要代码压缩、gzip、体积分析等优化的配置，大大降低最终项目打包体积

## 打包优化

### CSS 代码压缩

```shell
yarn add css-minimizer-webpack-plugin -D
```

```js
// webpack.prod.js
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
module.exports = {
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(), // 去重压缩css
    ],
  }
}
```

### 多线程压缩js: terser-webpack-plugin

> 用法：`https://www.npmjs.com/package/terser-webpack-plugin`

```shell
yarn add terser-webpack-plugin -D
```

```js
// webpack.prod.js
const TerserPlugin = require('terser-webpack-plugin')
module.exports = {
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(), // 去重压缩css
      new TerserPlugin({ // 压缩JS代码
        terserOptions: {
          compress: {
            drop_console: true, // 去除console
          },
        },
      }), // 压缩JavaScript
    ],
  }
}
```

### 分割代码: splitChunks

> 默认配置： `https://webpack.docschina.org/pluginssplit-chunks-plugin/`

- chunks: 表示哪些代码需要优化，有三个可选值：initial(初始块)、async(按需加载块)、all(全部块)，默认为async
- minSize: 表示在压缩前的最小模块大小，默认为30000
- minChunks: 表示被引用次数，默认为1
- maxAsyncRequests: 按需加载时候最大的并行请求数，默认为5
- maxInitialRequests: 一个入口最大的并行请求数，默认为3
- automaticNameDelimiter: 命名连接符
- name: 拆分出来块的名字，默认由块名和hash值自动生成
- cacheGroups: 缓存组。缓存组的属性除上面所有属性外，还有test, priority, reuseExistingChunk
  - test: 用于控制哪些模块被这个缓存组匹配到
  - priority: 缓存组打包的先后优先级
  - reuseExistingChunk: 如果当前代码块包含的模块已经有了，就不在产生一个新的代码块

```js
config.optimization = {
  runtimeChunk: 'single',
  splitChunks: {
    chunks: 'all', // 表示哪些代码需要优化，有三个可选值：initial(初始块)、async(按需加载块)、all(全部块)，默认为async
    maxInitialRequests: Infinity, // 按需加载时候最大的并行请求数，默认为5
    minSize: 30000, // 依赖包超过30000bit将被单独打包
    automaticNameDelimiter: '-', // 命名连接符
    // 缓存组
    // priority: 缓存组打包的先后优先级
    // minChunks: 表示被引用次数，默认为1
    cacheGroups: {
      libs: {
        name: 'chunk-libs',
        test: /[\\/]node_modules[\\/]/,
        priority: 10,
        chunks: 'initial' // only package third parties that are initially dependent
      },
      elementUI: {
        name: 'chunk-elementUI', // split elementUI into a single package
        priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
        test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
      },
      commons: {
        name: 'chunk-commons',
        test: resolve('src/components'), // can customize your rules
        minChunks: 3, //  minimum common number
        priority: 5,
        reuseExistingChunk: true
      }
    }
  }
}
```

### **DllPlugin**

> 这个插件是在一个额外的独立的 webpack 设置中创建一个只有 dll 的 bundle(dll-only-bundle)。 这个插件会生成一个名为 manifest.json 的文件，这个文件是用来让 DLLReferencePlugin 映射到相关的依赖上去的。
>
> 可以简单理解为把一些依赖从项目的bundle中拆分出去，通过映射关系用请求来加载。

配置DllPlugin,可以分为下面几个步骤：

1. 新建webpack.dll.config.js文件(其他命名都可以)，配置需要拆分的插件；
2. 在package.json文件中新建一条命令来专门打包，`"build:dll":"webpack --config webpack.dll.config.js"`; 运行该命令；
3. 在vue.config.js 文件中配置`DllReferencePlugin`,主要把dll引用到需要预编译的依赖；
4. 在index.html手动引入拆分的bundle包

安装：

```shell
yarn add webpack-cli@^3.2.3 add-asset-html-webpack-plugin@^3.1.3 clean-webpack-plugin@^1.0.1 --dev
```

配置：

```js
// webpack.dll.config.js

/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
// dll文件存放的目录
const dllPath = 'public/vendor'

module.exports = {
  entry: {
    // 需要提取的库文件
    vendor: ['vue', 'vue-router', 'vuex', 'element-ui'],
    utils: ['axios', 'lodash']
  },
  output: {
    path: path.join(__dirname, dllPath),
    filename: '[name].dll.js',
    // vendor.dll.js中暴露出的全局变量名
    // 保持与 webpack.DllPlugin 中名称一致
    library: '[name]_[hash]'
  },
  plugins: [
    // 清除之前的dll文件
    new CleanWebpackPlugin(['*.*'], {
      root: path.join(__dirname, dllPath)
    }),
    // "clean-webpack-plugin": "^3.0.0"
    // new CleanWebpackPlugin(),
    // 设置环境变量
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: 'production'
      }
    }),
    // manifest.json 描述动态链接库包含了哪些内容
    new webpack.DllPlugin({
      path: path.join(__dirname, dllPath, '[name]-manifest.json'),
      // 保持与 output.library 中名称一致
      name: '[name]_[hash]',
      context: process.cwd()
    })
  ]
12
```

在 `vue.config.js plugin` 中使用

```js
new DllReferencePlugin({
  context: process.cwd(),
  manifest: require('./public/vendor/vendor-manifest.json')
}),
  new DllReferencePlugin({
  context: process.cwd(),
  manifest: require('./public/vendor/utils-manifest.json')
}),
  // 将 dll 注入到 生成的 html 模板中
  new AddAssetHtmlPlugin({
  // dll文件位置
  filepath: getPath('./public/vendor/*.js'),
  // dll 引用路径
  publicPath: './vendor',
  // dll最终输出的目录
  outputPath: './vendor'
})
```

### cdn加速

> externals 配置选项提供了「从输出的 bundle 中排除依赖」的方法。防止将某些 import 的包(package)打包到 bundle 中，而是在运行时(runtime)再去从外部获取这些扩展依赖(external dependencies)。
>
> 这个属性很好理解，而且使用起来也非常方便，非常的nice! 最简单的方法是配置名称，当然你也可以编写一些复杂的配置[官方文档](https://www.webpackjs.com/configuration/externals/)

```js
//vue.config.js
...
configureWebpack:{
    externals: {
      "vue": "Vue",
      "element-ui": "ELEMENT"
    },
}
// 然后在 index.html 手动cdn引入(或者用插件自动添加)
```

### console 删除

```js
const TerserPlugin = require('terser-webpack-plugin')
module.exports = {
  configureWebpack: config => {
    config
      .optimization = {
        minimizer: [
          new TerserPlugin({
            terserOptions: {
              compress: {
                drop_console: true
              }
            }
          })
        ]
      }
  }
}
```

### 图片压缩

```js
config.module
  .rule('images')
  .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
  .use('image-webpack-loader')
  .loader('image-webpack-loader')
  .options({ bypassOnDebug: true })
  .end()
```

## 编译优化

### vue cli3 webpack 默认配置

```shell
vue inspect
```

### sourcemap 改动

对于打包后的 `sourceMap`，[webpack提供多种类型的配置](https://webpack.docschina.org/configuration/devtool/#devtool)

`eval-cheap-source-map` 在保有报错关键信息的同时，在构建以及重新构建中速度会更快

### 可用 smp 先对 plugin 跟 loader 进行分析

> [在vue cli3中使用smp](https://github.com/stephencookdev/speed-measure-webpack-plugin/issues/61)

```js
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
chainWebpack: config => {
  config.plugins.delete('prefetch')
  config
    .plugin('speed-measure-webpack-plugin')
    .use(SpeedMeasurePlugin)
    .end()
 },
```

### hard-source-webpack-plugin 中间缓存

```js
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')
module.exports = {
  plugin: [
    new HardSourceWebpackPlugin()
  ]
}
```

## 用户体验优化

### 模块懒加载

```js
// 路由
// src/router/index.js
const routes = [
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/home',
    name: 'home',
    // 懒加载
    component: () => import('../views/home/home.vue'),
  },
]
```

### gzip 打包: compression-webpack-plugin

> 用法：`https://www.npmjs.com/package/compression-webpack-plugin`

```shell
yarn add -D compression-webpack-plugin
```

```js
// webpack.prod.js
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  plugins: [new CompressionPlugin({
    algorithm: 'gzip',
      threshold: 10240,
      minRatio: 0.8
  })],
};
```
