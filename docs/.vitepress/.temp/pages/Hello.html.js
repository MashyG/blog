export const data = JSON.parse(
  '{"key":"v-2ffdf1c0","path":"/Hello.html","title":"Hello VuePress","lang":"zh-CN","frontmatter":{"title":"Hello VuePress","author":"MashyG","date":"2022-08-11"},"excerpt":"","headers":[]}'
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
