import { defineUserConfig } from 'vuepress'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { path } from '@vuepress/utils'
import { defaultTheme } from '@vuepress/theme-default'

function getPlugins() {
  return [
    registerComponentsPlugin({
      components: {
        Title: path.resolve(__dirname, './components/Title.vue')
      }
    })
  ]
}

function getNavBar() {
  return [
    { text: '首页', link: '/' },
    {
      text: 'MashyG',
      children: [
        { text: 'Github', link: 'https://github.com/MashyG' },
        { text: '掘金', link: 'https://juejin.cn/user/2805609403788206' }
      ]
    }
  ]
}

function getSideBar() {
  return [
    {
      text: 'Hello',
      collapsable: false, // 是否可折叠
      children: [
        {
          text: 'Hello vuepress',
          link: '/',
          children: []
        }
      ]
    },
    {
      text: 'Webpack',
      collapsable: false,
      children: [
        {
          text: 'webpack 优化',
          link: '/webpack',
          children: []
        }
      ]
    },
    {
      text: 'Github 学习记录',
      collapsable: true,
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
      collapsable: true,
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
    },
    {
      text: 'Vue3 学习记录',
      collapsable: true,
      children: [
        {
          text: 'mini-vue 学习记录',
          link: '/Vue3',
          children: []
        },
        {
          text: 'ref ',
          link: '/Vue3/ref',
          children: []
        },
        {
          text: 'reactivity 流程',
          link: '/Vue3/reactivity',
          children: []
        },
        {
          text: 'runtime-core 初始化流程',
          link: '/Vue3/runtimeCoreInit',
          children: []
        }
      ]
    }
  ]
}

export default defineUserConfig({
  base: '/blog/',
  title: 'MashyG',
  description: 'MashyG‘s Blog',
  plugins: getPlugins(),
  // 设置语言
  lang: 'zh-CN',
  theme: defaultTheme({
    home: '/',
    colorMode: 'light',
    // 导航栏
    navbar: getNavBar(),
    // 侧边栏
    sidebar: getSideBar()
  })
})
