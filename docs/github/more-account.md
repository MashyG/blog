---
title: 配置多个GitHub账号于本机
author: MashyG
date: '2022-08-10'
---


## 查看 `git` 已配置列表
   ```
   git config --list
   ```
   
## 若已存在全局的 `git` 配置</br>
   可删除：
   ```
   git config --global --unset user.name
   git config --global --unset user.email
   ```
   可新增另外的 `ssh-key`:
   ```
   // 一直回车即可
   ssh-keygen -t rsa -C "github账号"
   // 默认生成～/.ssh/id_rsa（密钥）和.ssh/id_rsa.pub（公钥）

   ssh-keygen -t rsa -C "github账号" -f ～/.ssh/另外的文件名
   // 生成～/.ssh/另外的文件名（密钥）和.ssh/另外的文件名.pub（公钥）
   ...
   ```

## 将刚才新增的两个或多个 `ssh-key` 放入 `ssh-agent` 信任列表中
   ```
   ssh-add ~/.ssh/id_rsa
   ssh-add ~/.ssh/另外的文件名
   ...
   ```

## 复制两个或多个公钥（.pub文件）,分别添加到不同的git账号下

## 需要添加一个config文件到.ssh文件夹下（没有则新建一个），去配置多个github账号的推送操作
   ```md
   # default
   Host github.com   // 用于区分不同github账号的
   Hostname github.com  // github地址或其他仓库地址
   IdentityFile ~/.ssh/id_rsa // 本地密钥地址
   User default   // 自定义用户名
    
   # 另外的文件名
   Host 另外的文件名.github.com
   Hostname github.com
   IdentityFile ~/.ssh/另外的文件名
   User 另外的文件名
   ```

## 测试连接
   ```
   ssh -T git@github.com
   // 连接默认，成功会提示：Hi，default！...

   ssh -T git@另外的文件名.github.com
   // 连接默认，成功会提示：Hi，另外的文件名！...
   ```

## clone
   ```
   // default
   git clone git@github.com:xxx/xxx.git
   // 另外的文件名
   git clone git@另外的文件名github.com:xxx/xxx.git
   ```
