
# 本地项目上传到 git 远程仓库

目录
[[toc]]

## 进入项目目录中

## 添加 git 用户和邮箱

```shell
git config --global user.name 'github的名字'
git config --global user.email 'github绑定的邮箱'

git config --local user.email 'github绑定的邮箱'
git config --local user.email 'github绑定的邮箱'
```

## 生成秘钥，找到`id_rsa.pub文件`，复制秘钥添加到 github 上

```shell
ssh-keygen -t rsa -C 'github绑定的邮箱'
```

## 初始化 git

```shell
git init
```

## 提交项目内容

```shell
git add .
```

## 撤销已提交内容

```shell
git reset .
```

## 可查看 git 状态

```shell
git status
```

## 上传提交的内容到本地仓库

```shell
git commit -m '注释'
```

## 连接 github 远程仓库

```shell
git remote add origin '你的仓库地址'
// 若有多个github
git remote add origin 'git@(另外的文件名.)github.com/xxx'
```

## 推送本地仓库到远程仓库(新的远程仓库无分支，则会新建一个`master`分支)

```shell
git push -u origin master
```

## branch 分支管理

- `git checkout -b feat/xxx origin/feat/xxx`: 克隆远端分支 feat/xxx 到本地
- `git checkout -b feat/xxx`: 从当前分支新建一个分支 feat/xxx
- `git merge [branchName]`: 将 branchName 合并到当前分支
- `git merge [branchName] --squash`: 将 branchName 合并到当前分支，并将 branchName 上的所有提交合并成一次提交
- `git commit --amend`: 修改上次的提交信息，push 后不会增加新的 commit 记录，但是会修改本次的 commit 哈希值 (也可以理解为删掉了最新的一次 commit，重新又提交了一次)

## rebase

- git pull --rebase origin [branchName] = git fetch + git rebase

> 将远程分支依次合并到本地分支

```shell
# 假设当前分支 dev，commit 为 a b c d e
# 假设当前分支 master，commit 为 a b f g h
git pull --rebase origin master
# 当前分支 dev，commit 为 a b c d e f g h
```

- git rebase master

> 将本地分支依次合并到远程分支

```shell
# 假设当前分支 dev，commit 为 a b c d e
# 假设当前分支 master，commit 为 a b f g h
git rebase master
# 当前分支 dev，commit 为 a b f g h c d e
```

**注意**🐯

- 如果有冲突，解决完冲突后，可以使用 `git rebase --continue` 继续合并分支
- 撤销 rebase：`git rebase --abort`
- 丢弃引起冲突的 commit：`git rebase --skip`

## stash

> 场景：当正在开发新功能，突然出现一个急需修改的 bug 时，当前开发的代码又不想 commit，该怎么办呢？***（可以将当前代码放到本地缓存区(stash)）***

- `git stash` 贮藏代码
- `git stash save 'msg'` 带备注贮藏
- `git stash pop` 恢复到工作区和缓存区，会移除 stash key
- `git stash apply stashName` 恢复指定贮藏代码到工作区和缓存区，会保留stash key
- `git stash list` 查看当前贮藏区
- `git stash show -p` 显示最新的贮藏文件具体改动
- `git stash show -p stashName` 显示指定的贮藏文件具体改动

## cherry-pick 复制提交

- `git cherry-pick [commit hash]` 将其他分支上已提交的 commit 在当前分支在提交一次，产生新的 commit hash

## revert 回退版本

- `git revert [commit hash]` 将当前分支版本回退到指定 commit hash 的提交记录上
