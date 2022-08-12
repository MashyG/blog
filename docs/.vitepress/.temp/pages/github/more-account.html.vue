<template><div><h2 id="查看-git-已配置列表" tabindex="-1"><a class="header-anchor" href="#查看-git-已配置列表" aria-hidden="true">#</a> 查看 <code v-pre>git</code> 已配置列表</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git config --list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="若已存在全局的-git-配置" tabindex="-1"><a class="header-anchor" href="#若已存在全局的-git-配置" aria-hidden="true">#</a> 若已存在全局的 <code v-pre>git</code> 配置</br></h2>
<p>可删除：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git config --global --unset user.name
git config --global --unset user.email
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>可新增另外的 <code v-pre>ssh-key</code>:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>// 一直回车即可
ssh-keygen -t rsa -C &quot;github账号&quot;
// 默认生成～/.ssh/id_rsa（密钥）和.ssh/id_rsa.pub（公钥）

ssh-keygen -t rsa -C &quot;github账号&quot; -f ～/.ssh/另外的文件名
// 生成～/.ssh/另外的文件名（密钥）和.ssh/另外的文件名.pub（公钥）
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="将刚才新增的两个或多个-ssh-key-放入-ssh-agent-信任列表中" tabindex="-1"><a class="header-anchor" href="#将刚才新增的两个或多个-ssh-key-放入-ssh-agent-信任列表中" aria-hidden="true">#</a> 将刚才新增的两个或多个 <code v-pre>ssh-key</code> 放入 <code v-pre>ssh-agent</code> 信任列表中</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ssh-add ~/.ssh/id_rsa
ssh-add ~/.ssh/另外的文件名
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="复制两个或多个公钥-pub文件-分别添加到不同的git账号下" tabindex="-1"><a class="header-anchor" href="#复制两个或多个公钥-pub文件-分别添加到不同的git账号下" aria-hidden="true">#</a> 复制两个或多个公钥（.pub文件）,分别添加到不同的git账号下</h2>
<h2 id="需要添加一个config文件到-ssh文件夹下-没有则新建一个-去配置多个github账号的推送操作" tabindex="-1"><a class="header-anchor" href="#需要添加一个config文件到-ssh文件夹下-没有则新建一个-去配置多个github账号的推送操作" aria-hidden="true">#</a> 需要添加一个config文件到.ssh文件夹下（没有则新建一个），去配置多个github账号的推送操作</h2>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code># default
Host github.com   // 用于区分不同github账号的
Hostname github.com  // github地址或其他仓库地址
IdentityFile ~/.ssh/id_rsa // 本地密钥地址
User default   // 自定义用户名
 
# 另外的文件名
Host 另外的文件名.github.com
Hostname github.com
IdentityFile ~/.ssh/另外的文件名
User 另外的文件名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="测试连接" tabindex="-1"><a class="header-anchor" href="#测试连接" aria-hidden="true">#</a> 测试连接</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ssh -T git@github.com
// 连接默认，成功会提示：Hi，default！...

ssh -T git@另外的文件名.github.com
// 连接默认，成功会提示：Hi，另外的文件名！...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="clone" tabindex="-1"><a class="header-anchor" href="#clone" aria-hidden="true">#</a> clone</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>// default
git clone git@github.com:xxx/xxx.git
// 另外的文件名
git clone git@另外的文件名github.com:xxx/xxx.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
