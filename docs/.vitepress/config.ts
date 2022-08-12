export default {
  // 设置语言
  lang: "zh-CN",
  base: "/blog/",
  text: "MashyG",
  description: "MashyG‘s Blog",
  themeConfig: {
    // 导航栏
    nav: [
      { text: "首页", link: "/" },
      {
        text: "MashyG",
        items: [
          { text: "Github", link: "https://github.com/MashyG" },
          { text: "掘金", link: "https://juejin.cn/user/2805609403788206" },
        ],
      },
    ],
    // 侧边栏
    sidebar: [
      {
        text: "Hello",
        link: "/Hello",
        collapsable: false, // 不折叠
        items: [],
      },
      {
        text: "Github 学习记录",
        collapsable: false, // 不折叠
        items: [
          {
            text: "配置多个GitHub账号于本机",
            link: "/github/more-account",
          },
          { text: "本地项目上传到 git 远程仓库", link: "/github/operate" },
        ],
      },
      {
        text: "JavaScript 忍者秘籍",
        collapsable: false, // 不折叠
        items: [
          {
            text: "函数",
            link: "/JavaScript/function",
          },
        ],
      },
    ],
  },
};
