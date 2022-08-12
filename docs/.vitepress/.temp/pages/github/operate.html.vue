<template>
  <div>
    <h2 id="进入项目目录中" tabindex="-1">
      <a class="header-anchor" href="#进入项目目录中" aria-hidden="true">#</a>
      进入项目目录中
    </h2>
    <h2 id="添加git用户和邮箱" tabindex="-1">
      <a class="header-anchor" href="#添加git用户和邮箱" aria-hidden="true"
        >#</a
      >
      添加git用户和邮箱
    </h2>
    <div class="language-text ext-text line-numbers-mode">
      <pre
        v-pre
        class="language-text"
      ><code>git config --global user.name 'github的名字'
git config --global user.email 'github绑定的邮箱'

git config --local user.email 'github绑定的邮箱'
git config --local user.email 'github绑定的邮箱'
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <h2 id="生成秘钥-找到id-rsa-pub文件-复制秘钥添加到github上" tabindex="-1">
      <a
        class="header-anchor"
        href="#生成秘钥-找到id-rsa-pub文件-复制秘钥添加到github上"
        aria-hidden="true"
        >#</a
      >
      生成秘钥，找到<code v-pre>id_rsa.pub文件</code>，复制秘钥添加到github上
    </h2>
    <div class="language-text ext-text line-numbers-mode">
      <pre
        v-pre
        class="language-text"
      ><code>ssh-keygen -t rsa -C 'github绑定的邮箱'
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
      </div>
    </div>
    <h2 id="初始化git" tabindex="-1">
      <a class="header-anchor" href="#初始化git" aria-hidden="true">#</a>
      初始化git
    </h2>
    <div class="language-text ext-text line-numbers-mode">
      <pre v-pre class="language-text"><code>git init
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
      </div>
    </div>
    <h2 id="提交项目内容" tabindex="-1">
      <a class="header-anchor" href="#提交项目内容" aria-hidden="true">#</a>
      提交项目内容
    </h2>
    <div class="language-text ext-text line-numbers-mode">
      <pre v-pre class="language-text"><code>git add .
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
      </div>
    </div>
    <h2 id="撤销已提交内容" tabindex="-1">
      <a class="header-anchor" href="#撤销已提交内容" aria-hidden="true">#</a>
      撤销已提交内容
    </h2>
    <div class="language-text ext-text line-numbers-mode">
      <pre v-pre class="language-text"><code>git reset .
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
      </div>
    </div>
    <h2 id="可查看git状态" tabindex="-1">
      <a class="header-anchor" href="#可查看git状态" aria-hidden="true">#</a>
      可查看git状态
    </h2>
    <div class="language-text ext-text line-numbers-mode">
      <pre v-pre class="language-text"><code>git status
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
      </div>
    </div>
    <h2 id="上传提交的内容到本地仓库" tabindex="-1">
      <a
        class="header-anchor"
        href="#上传提交的内容到本地仓库"
        aria-hidden="true"
        >#</a
      >
      上传提交的内容到本地仓库
    </h2>
    <div class="language-text ext-text line-numbers-mode">
      <pre v-pre class="language-text"><code>git commit -m '注释'
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
      </div>
    </div>
    <h2 id="连接github远程仓库" tabindex="-1">
      <a class="header-anchor" href="#连接github远程仓库" aria-hidden="true"
        >#</a
      >
      连接github远程仓库
    </h2>
    <div class="language-text ext-text line-numbers-mode">
      <pre
        v-pre
        class="language-text"
      ><code>git remote add origin '你的仓库地址'
// 若有多个github
git remote add origin 'git@另外的文件名.github.com/xxx'
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <h2
      id="推送本地仓库到远程仓库-新的远程仓库无分支-则会新建一个master分支"
      tabindex="-1"
    >
      <a
        class="header-anchor"
        href="#推送本地仓库到远程仓库-新的远程仓库无分支-则会新建一个master分支"
        aria-hidden="true"
        >#</a
      >
      推送本地仓库到远程仓库(新的远程仓库无分支，则会新建一个<code v-pre
        >master</code
      >分支)
    </h2>
    <div class="language-text ext-text line-numbers-mode">
      <pre v-pre class="language-text"><code>git push -u origin master
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
      </div>
    </div>
  </div>
</template>
