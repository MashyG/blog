export const data = JSON.parse(
  '{"key":"v-292801d0","path":"/JavaScript/function.html","title":"函数是根基","lang":"zh-CN","frontmatter":{"title":"函数是根基","author":"MashyG","date":"2022-08-10"},"excerpt":"","headers":[{"level":2,"title":"函数是第一型对象","slug":"函数是第一型对象","children":[]},{"level":2,"title":"函数声明","slug":"函数声明","children":[]},{"level":2,"title":"作用域和函数","slug":"作用域和函数","children":[]},{"level":2,"title":"函数调用","slug":"函数调用","children":[{"level":3,"title":"从参数到函数形参","slug":"从参数到函数形参","children":[]},{"level":3,"title":"作为函数调用","slug":"作为函数调用","children":[]},{"level":3,"title":"作为方法进行调用","slug":"作为方法进行调用","children":[]},{"level":3,"title":"作为构造器进行调用","slug":"作为构造器进行调用","children":[]}]}]}'
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
