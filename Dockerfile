FROM node:16.4.2-slim as base

LABEL "com.github.actions.name"="Vitepress deploy"
LABEL "com.github.actions.description"="A GitHub Action to build and deploy Vitepress sites to GitHub Pages"
LABEL "com.github.actions.icon"="upload-cloud"
LABEL "com.github.actions.color"="gray-dark"

# 仓库地址
LABEL "repository"="https://github.com/MashyG/blog"
# 博客地址
LABEL "homepage"="https://mashyg.github.io/blog/"
# 镜像名称
LABEL "maintainer"="MashyG"

RUN apt-get update && apt-get install -y git jq

COPY entrypoint.sh /entrypoint.sh
# 加权限
RUN ["chmod", "+x", "/entrypoint.sh"]
# 运行
ENTRYPOINT ["/entrypoint.sh"]