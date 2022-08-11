FROM node:16.4.2-slim as base

LABEL "com.github.actions.name"="Vuepress deploy"
LABEL "com.github.actions.description"="A GitHub Action to build and deploy Vuepress sites to GitHub Pages"
LABEL "com.github.actions.icon"="upload-cloud"
LABEL "com.github.actions.color"="gray-dark"

LABEL "repository"="https://github.com/MashyG/blog"
LABEL "homepage"="https://github.com/MashyG/blog"
LABEL "maintainer"="MashyG"

RUN apt-get update && apt-get install -y git jq

COPY entrypoint.sh /entrypoint.sh
RUN ["chmod", "+x", "/entrypoint.sh"]
ENTRYPOINT ["/entrypoint.sh"]