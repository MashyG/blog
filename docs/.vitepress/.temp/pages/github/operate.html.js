export const data = JSON.parse(
  '{"key":"v-3a80ce30","path":"/github/operate.html","title":"本地项目上传到 git 远程仓库","lang":"zh-CN","frontmatter":{"title":"本地项目上传到 git 远程仓库","author":"MashyG","date":"2022-08-10"},"excerpt":"","headers":[{"level":2,"title":"进入项目目录中","slug":"进入项目目录中","children":[]},{"level":2,"title":"添加git用户和邮箱","slug":"添加git用户和邮箱","children":[]},{"level":2,"title":"生成秘钥，找到id_rsa.pub文件，复制秘钥添加到github上","slug":"生成秘钥-找到id-rsa-pub文件-复制秘钥添加到github上","children":[]},{"level":2,"title":"初始化git","slug":"初始化git","children":[]},{"level":2,"title":"提交项目内容","slug":"提交项目内容","children":[]},{"level":2,"title":"撤销已提交内容","slug":"撤销已提交内容","children":[]},{"level":2,"title":"可查看git状态","slug":"可查看git状态","children":[]},{"level":2,"title":"上传提交的内容到本地仓库","slug":"上传提交的内容到本地仓库","children":[]},{"level":2,"title":"连接github远程仓库","slug":"连接github远程仓库","children":[]},{"level":2,"title":"推送本地仓库到远程仓库(新的远程仓库无分支，则会新建一个master分支)","slug":"推送本地仓库到远程仓库-新的远程仓库无分支-则会新建一个master分支","children":[]}]}'
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
