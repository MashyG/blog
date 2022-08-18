const {
  registerComponentsPlugin
} = require('@vuepress/plugin-register-components')
const { path } = require('@vuepress/utils')
const { defaultTheme } = require('@vuepress/theme-default')

export default {
  base: '/blog/',
  title: 'MashyG',
  description: 'MashyG‘s Blog',
  plugins: [
    registerComponentsPlugin({
      components: {
        Title: path.resolve(__dirname, './components/Title.vue')
      }
    })
  ],
  // 设置语言
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  theme: defaultTheme({
    home: '/',
    colorMode: 'light',
    // 导航栏
    navbar: [
      { text: '首页', link: '/' },
      {
        text: 'MashyG',
        children: [
          { text: 'Github', link: 'https://github.com/MashyG' },
          { text: '掘金', link: 'https://juejin.cn/user/2805609403788206' }
        ]
      }
    ],
    // 侧边栏
    sidebar: [
      {
        text: 'Hello',
        collapsable: false, // 不折叠
        children: [
          {
            text: 'Hello vuepress',
            link: '/',
            children: []
          }
        ]
      },
      {
        text: 'Github 学习记录',
        collapsable: false, // 不折叠
        children: [
          {
            text: '配置多个GitHub账号于本机',
            link: '/github/more-account',
            children: []
          },
          {
            text: '本地项目上传到 git 远程仓库',
            link: '/github/operate',
            children: []
          }
        ]
      },
      {
        text: 'JavaScript 忍者秘籍',
        collapsable: false, // 不折叠
        children: [
          {
            text: '函数',
            link: '/JavaScript/function',
            children: []
          },
          {
            text: '挥舞函数',
            link: '/JavaScript/useOfFunction',
            children: []
          },
          {
            text: '闭包',
            link: '/JavaScript/closure',
            children: []
          },
          {
            text: '原型与面向对象',
            link: '/JavaScript/prototype',
            children: []
          },
          {
            text: '正则表达式',
            link: '/JavaScript/regexp',
            children: []
          }
        ]
      }
    ]
  })
}
