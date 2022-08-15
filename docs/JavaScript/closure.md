
# 闭包

> 闭包是一个函数在创建时允许该自身函数访问并操作该自身函数以外的变量时所创建的作用域。换句话说，闭包可以让函数访问所有的变量和函数，只要这些变量和函数存在于该函数声明时的作用域内就行

## 闭包是如何工作的

### 初试

```js
var outer = 'outer'
function outerFunc() {
  outer && console.log('outer')
}

outerFunc() // outer
```

> 外部变量（outer）和外部函数（outerFunc）都是在全局作用域内声明的，该作用域（闭包）从未消失过；该函数可以访问外部变量，因为它仍在作用域内并且是可用的

### 加料

```js
var outer = 'outer'

var later

function outerFunc() {
  var inner = 'inner'
  function innerFunc() {
    outer && console.log('outer')
    inner && console.log('inner')
  }
  later = innerFunc
}

outerFunc()

later() // outer  inner
```

> 在外部函数中声明 innerFunc 的时候，不仅是声明了函数，还创建了一个闭包，该闭包不仅包含函数声明，还包含了函数声明的那一时刻点该作用域中的所有变量。最终当 innerFunc() 执行时，当时声明的作用域已经消失了，通过闭包，该函数还是还能够访问原始作用域

### 核心

```js
var outer = 'outer'

var later

function outerFunc() {
  var inner = 'inner'
  function innerFunc(params) {
    outer && console.log('outer')
    inner && console.log('inner')
    params && console.log('params')
    newOuter && console.log('newOuter')
  }
  later = innerFunc
}

newOuter && console.log('newOuter') // 不存在变量 newOuter

var newOuter = 'newOuter'

outerFunc()

later('params') // outer  inner  params  newOuter
```

通过👆🏻代码，闭包有趣的概念：

1. 内部函数的参数是包含在闭包中的
2. 作用域之外的所有变量，即便是函数声明之后的那些声明，也都包含在闭包中
3. 相同的作用域内，尚未声明的变量不能进行提前引用

## 使用闭包

### 私有变量

> 闭包的一种常见用法是封装一些信息作为私有变量，也就是说，限制这些变量的作用域

```js
function Run() {
  var value = 0
  this.getValue = function() {
    return value
  }
  this.add = function() {
    value++
  }
}
var run = new Run()

run.add()

console.log(run.getValue()) // 1

console.log(run.value) // undefined
```

通过👆🏻代码显示，即便我们没有对该变量直接赋值，通过方法将该变量增加1。
我们可以操作 value 的值，是因为即便是该构造器执行完并且已经没有作用域了，value 变量还是**会绑定到 add() 方法声明创建的闭包**上，并且**可以在 add() 方法内进行使用**

### 回调（callback）与计时器（timer）

> 另外一个使用闭包的最常见情形，是在处理回调或使用计时器的时候。
> 在这两种情况下，函数都是在后期未指定的事件进行异步调用，在这种函数内部，我们经常需要访问外部数据

**注意**：函数在闭包里执行的时候，不仅可以在闭包创建的时刻点上看到这些变量的值，还可以对其进行更新。换句话说，闭包不是在创建那一时刻点的状态的快照，而是一个真实的状态封装，只要闭包存在，就可以对其进行修改

## 绑定函数上下文

> 通过匿名函数、apply() 和闭包。可以强制让特定的函数在调用时都是用特定所需的上下文

## 函数重载

### 函数包装

> 函数包装是一个封装函数逻辑的技巧，用于在单个步骤内重载创建新函数或集成函数。最有价值的场景是，在重载一些已经存在的函数时，同时保持原始函数在被包装后仍能够有效使用

## 即时函数

```js
(function(params){
  ...
})(params)
```

👆🏻代码的最终结果是一个执行如下👇🏻操作的单条语句表达式

- 创建一个函数实例
- 执行该函数
- 销毁该函数

> 此外，因为我们要处理一个可以有一个闭包的函数，所以在函数调用的短暂过程中，也是可以访问和声明语句处在同一个作用域内的外部变量和参数的。事实证明，这个简单的构造被称之为即时函数

### 临时作用域和私有变量

> 利用即时函数，我们建立一个有趣的封闭空间来做一些事情。由于函数是立即执行，其内部所有的函数、所有的变量都局限于其内部作用域。我们可以使用即使函数创建一个临时的作用域，用于存储数据状态

**注意：**：变量在 JavaScript 中的作用域依赖于定义变量的函数，通过创建一个临时函数，利用其特性，我们可以创建一个持有变量的临时作用域

### 循环

> 即时函数另外一个有用的地方是，它可以利用循环和闭包解决一些棘手的问题

```html
<body>
  <div>DIV 0</div>
  <div>DIV 1</div>
  <script type="text/javaScript">
    var divs = document.getElementsByTagName("div")

    for(var i = 0; i < divs.length; i++) {
      divs[i].addEventListener("click", function() {
        alert(("divs #" + i + " was clicked!!"))
      }, false)
    }
    // 实际点击后，i 的值始终是 2
  </script>
</body>
```

通过在 for 循环内加入即时函数（替换👆🏻的代码块），我们可以将正确的值传递给即时函数（也就是内部函数的闭包），进而让处理程序也得到正确的值

```html
<body>
  <div>DIV 0</div>
  <div>DIV 1</div>
  <script type="text/javaScript">
    var divs = document.getElementsByTagName("div")

    for(var i = 0; i < divs.length; i++) (function(n) {
      divs[i].addEventListener("click", function() {
        alert(("divs #" + i + " was clicked!!"))
      }, false)
    })(i)
    // 实际点击第一个 div 后的提示：divs #0 was clicked!!
    // 实际点击第二个 div 后的提示：divs #2 was clicked!!
  </script>
</body>
```

## 总结

- 从最基本的闭包是如何实现的开始，然后了解如何在应用程序中使用闭包。在很多地方，我们看到闭包都是特别有用的，包括私有变量的定义和回调的使用
- 探索一些有助于塑造 JavaScript 语言的高级闭包的概念，包括强制设置函数上下文、偏应用函数、重载函数，接着深入探讨即时函数
