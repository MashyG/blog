export const data = JSON.parse(
  '{"key":"v-8daa1a0e","path":"/","title":"MashyG Blog","lang":"zh-CN","frontmatter":{"title":"MashyG Blog","author":"MashyG","date":"2022-08-11"},"excerpt":"","headers":[{"level":2,"title":"博客地址","slug":"博客地址","children":[]},{"level":2,"title":"Github","slug":"github","children":[]},{"level":2,"title":"JavaScript 忍者秘籍","slug":"javascript-忍者秘籍","children":[]}]}'
);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data);
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data);
  });
}
