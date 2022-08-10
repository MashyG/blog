module.exports = {
  base: '/blog/',
  title: 'MashyG',
  description: 'MashyG‘s Blog',
  // 设置语言
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  theme: 'reco', // 更换主题： vuepress-theme-reco
  themeConfig: {
    subSidebar: 'auto', // 开启目录结构
    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      {
        text: 'MashyG',
        items: [
          { text: 'Github', link: 'https://github.com/MashyG' },
          { text: '掘金', link: 'https://juejin.cn/user/2805609403788206' }
        ]
      }
    ],
    // 侧边栏
    sidebar: [
      {
        title: 'Hello',
        path: '/Hello',
        collapsable: false // 不折叠
      },
      {
        title: 'Github 学习记录',
        collapsable: false, // 不折叠
        children: [
          {
            title: '配置多个GitHub账号于本机',
            path: '/github/more-account'
          },
          { title: '本地项目上传到 git 远程仓库', path: '/github/operate' }
        ]
      },
      {
        title: 'JavaScript 忍者秘籍',
        collapsable: false, // 不折叠
        children: [
          {
            title: '函数',
            path: '/JavaScript/function'
          }
        ]
      }
    ]
  }
}
