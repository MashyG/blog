
# 挥舞函数

目录
[[toc]]

## 匿名函数

> 通常匿名函数的使用情况是，创建一个供以后使用的额函数。例如，**将匿名函数保存在一个变量里，将其作为一个对象的方法**，或者是**将匿名函数作为一个回调**

## 递归

> 当函数调用自身，或调用另外一个函数，但这个函数的调用树中的某个地方又调用自己时，递归就发生了

### 普通命名函数中的递归

```js
// 回文字符串
function isPalindrome(text) {
  if (text.length <= 1) return true
  if (text.charAt(0) != text.charAt(text.length - 1)) return false
  return isPalindrome(text.substr(1, text.length - 2))
}
```

> 函数递归的两个条件：**引用自身**；**有终止条件**。
> 递归函数不能终止于无限循环！！

### 方法中的递归

```js
const obj = {
  run: function(n) {
    return n > 1 ? obj.run(n - 1) + '-over' : 'over'
  }
}
```

### 引用的丢失问题

```js
const newObj = {
  run: obj.run
}
obj = {}
newObj.run(3) // 报错！！
```

![引用的丢失问题](../.vuepress/public/images/func-1.png)

```js
// 调整 obj
const changeObj = {
  run: function(n) {
    return n > 1 ? this.run(n - 1) + '-over' : 'over'
  }
}
```
