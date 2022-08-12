export const themeData = JSON.parse(
  '{"navbar":[{"text":"首页","link":"/"},{"text":"MashyG","items":[{"text":"Github","link":"https://github.com/MashyG"},{"text":"掘金","link":"https://juejin.cn/user/2805609403788206"}]}],"sidebar":[{"title":"Hello","path":"/Hello","collapsable":false},{"title":"Github 学习记录","collapsable":false,"children":[{"title":"配置多个GitHub账号于本机","path":"/github/more-account"},{"title":"本地项目上传到 git 远程仓库","path":"/github/operate"}]},{"title":"JavaScript 忍者秘籍","collapsable":false,"children":[{"title":"函数","path":"/JavaScript/function"}]}],"locales":{"/":{"selectLanguageName":"English"}},"colorMode":"auto","colorModeSwitch":true,"logo":null,"repo":null,"selectLanguageText":"Languages","selectLanguageAriaLabel":"Select language","sidebarDepth":2,"editLink":true,"editLinkText":"Edit this page","lastUpdated":true,"lastUpdatedText":"Last Updated","contributors":true,"contributorsText":"Contributors","notFound":["There\'s nothing here.","How did we get here?","That\'s a Four-Oh-Four.","Looks like we\'ve got some broken links."],"backToHome":"Take me home","openInNewWindow":"open in new window","toggleColorMode":"toggle color mode","toggleSidebar":"toggle sidebar"}'
);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData);
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData);
  });
}
