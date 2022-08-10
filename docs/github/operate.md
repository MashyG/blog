---
title: 本地项目上传到 git 远程仓库
author: MashyG
date: '2022-08-10'
---

## 进入项目目录中

## 添加git用户和邮箱
   ```
   git config --global user.name 'github的名字'
   git config --global user.email 'github绑定的邮箱'

   git config --local user.email 'github绑定的邮箱'
   git config --local user.email 'github绑定的邮箱'
   ``` 

## 生成秘钥，找到`id_rsa.pub文件`，复制秘钥添加到github上
   ```
   ssh-keygen -t rsa -C 'github绑定的邮箱'
   ```

## 初始化git
   ```
   git init
   ```

## 提交项目内容
   ```
   git add .
   ```

## 撤销已提交内容
   ```
   git reset .
   ```

## 可查看git状态
   ```
   git status
   ```

## 上传提交的内容到本地仓库
   ```
   git commit -m '注释'
   ```

## 连接github远程仓库
   ```
   git remote add origin '你的仓库地址'
   // 若有多个github
   git remote add origin 'git@另外的文件名.github.com/xxx'
   ```

## 推送本地仓库到远程仓库(新的远程仓库无分支，则会新建一个`master`分支)
   ```
   git push -u origin master
   ```