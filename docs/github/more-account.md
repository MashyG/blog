
# 配置多个GitHub账号于本机

目录
[[toc]]

## 查看 git 已配置列表

```shell
git config --list
```

## 若已存在全局的 `git` 配置

可删除：

```shell
git config --global --unset user.name
git config --global --unset user.email
```

可新增另外的 `ssh-key`:

```shell
# 一直回车即可
ssh-keygen -t rsa -C "github账号"
# 默认生成～/.ssh/id_rsa（密钥）和.ssh/id_rsa.pub（公钥）

# 进入到～/.ssh目录下
ssh-keygen -t rsa -C "github账号" -f 另外的文件名
# 生成密钥和公钥（.pub）
...
```

## 将刚才新增的两个或多个 `ssh-key` 放入 `ssh-agent` 信任列表中

```shell
ssh-add ~/.ssh/id_rsa
ssh-add ~/.ssh/另外的文件名
...
```

## 复制两个或多个公钥（.pub 文件）,分别添加到不同的 git 账号下

## 需要添加一个 config 文件到.ssh 文件夹下（没有则新建一个），去配置多个 github 账号的推送操作

```md
# default

  # 用于区分不同 github 账号的
  Host github.com
  # github 地址或其他仓库地址
  Hostname github.com
  # 本地密钥地址
  IdentityFile ~/.ssh/id_rsa
  # 自定义用户名
  User default

# 另外的文件名

  Host 另外的文件名.github.com
  Hostname github.com
  IdentityFile ~/.ssh/另外的文件名
  User 另外的文件名
```

## 测试连接

```shell
ssh -T git@github.com
# 连接成功会提示：Hi，default！...

ssh -T git@另外的文件名.github.com
# 连接成功会提示：Hi，另外的文件名！...
```

## clone

```shell
# default
git clone git@github.com:xxx/xxx.git
# 另外的文件名
git clone git@另外的文件名.github.com:xxx/xxx.git
```

### 注意

> git 操作之前，需要配置git用户信息，否则将使用全局用户信息提交！！！

```shell
git config user.name '昵称'
git config user.email '邮箱'
```
