
# 原型与面向对象

目录
[[toc]]

> 原型虽然是定义对象的一种很方便的方式，但它的本质依然是函数特性

## 实例化和原型

> 所有的函数在初始化的时候都有一个 prototype 属性，该属性的初始值是一个空对象。只有函数在作为构造器（constructor）的时候，prototype 属性才会发挥更大的作用

### 对象实例化

> 函数作为构造器进行调用时，**函数的原型是新对象的一个概览**

```js
function func(params) {}
func.prototype.run = function() { return true }

var runFunc = func()
!runFunc && console.log('runFunc 无返回值')  // runFunc 无返回值

var runFunc1 = new func()
runFunc1 && runFunc1.run && runFunc1.run() && console.log('runFunc1 返回值为 true')  // runFunc1 返回值为 true
```

> **实例属性**
>
> 使用 new 操作符将函数作为构造器进行调用的时候，其上下文被定义为新对象实例。这意味着，除了通过原型给函数附加属性的形式以外，我们还可以再构造器函数内通过 this 参数初始化值

```js
function Func() {
  this.flag = false

  this.run = function() {
    return !this.flag
  }
}
Func.prototype.run = function() {
  return this.flag
}

var runFunc = new Func()
runFunc.run() && console.log('调用的是构造函数的 run 方法，不是原型上的 run 方法')
```

**注意：** 在构造器内的绑定操作的优先级 **永远高于** 在原型上的绑定操作的优先级

> **协调引用** 原型上的属性并没有复制到其他地方，而是附加到新创建的对象上，并可以和对象自身属性引用一起协调运行

```js
function Func() {
  this.flag = false

  this.run = function() {
    return !this.flag
  }
}

var runFunc = new Func()

Func.prototype.run = function() {
  return this.flag
}
runFunc.run() && console.log('调用的是构造函数的 run 方法，不是原型上的 run 方法')
```

1. 在引用对象的一个属性时，**首先**检查该对象本身是否拥有该属性，若有，则直接返回；
2. 若没有，再查看对象的原型（prototype），检查该原型上是否有所要的属性，若有，则直接返回；
3. 若没有，则返回 undefined

> **注意：** JavaScript 中的每个对象，都有一个名为 constructor 的隐式属性，该属性引用的是创建该对象的构造器。由于 prototype 是构造器的一个属性，所有每个对象都有一种方式可以找到自己的原型

### 通过构造器判断对象类型

**判断一个实例的类型以及其构造器**

```js
function Func() {}
var runFunc = new Func()

// 使用 typeof 操作符判断该实例的类型
console.log(typeof runFunc === 'object') // true
// 使用 instanceof 确认一个实例是否是特定的函数构造器所创建
console.log(runFunc instanceof Func) // true
// 使用 constructor 属性确认该属性作为创建该对象的原始函数的引用，被添加在所有的实例上
console.log(runFunc.constructor === Func) // true
```

**使用 constructor 属性实例化一个新对象**

> 不用知道原有的沟槽函数就可以再次创建一个新实例，即便是原始的构造器在作用域已经不存在了，我们也完全可以在幕后使用该引用

```js
function Func() {}
var runFunc = new Func()
var runFunc1 = new runFunc.constructor()

// 创建一个新实例对象 runFunc1
console.log(runFunc1 instanceof Func) // true
// runFunc 和 runFunc1 不是同一个对象，也不是同一个实例
console.log(runFunc === runFunc1) // false
```

### 继承与原型链

**用原型实现继承**🐂

> 创建一个原型链最好的方式是，使用一个对象的实例作为另外一个对象的实例 `subClass.prototype = new SupperClass()`；这将保持原型链，是因为 SubClass 实例的原型是 SupperClass 的一个实例，该实例不仅拥有原型，还持有 SupperClass 的所有属性，并且该原型指向其自身超类的一个实例

```js
function Person() {}
Person.prototype.dance = function() {}

function Ninja() {}
Ninja.prototype = new Person()

var ninja = new Ninja()
console.log(ninja instanceof Ninja) // true
console.log(ninja instanceof Person) // true
console.log(ninja instanceof Object) // true
console.log(typeof ninja.dance === 'function') // true
```

> 所有原生 JavaScript 对象构造器（如Object，Array，String，Number，RegExp，Function）都有可以被操作和扩展的原型属性，这是因为每个对象构造器自身就是一个函数

## 疑难陷阱

### 扩展对象

> 当在对象上 Object 上添加属性时，需要注意 Object 上已有原生的属性，否则会破坏原生属性。此时需要判断对象是否有新属性：`Object.hasOwnProperty(key)`

```js
Object.prototype.keys = function() {
  var keys = []
  for(var i in this) {
    if (this.hasOwnProperty(i)) {
      keys.push(i)
    }
  }
  return keys
}
var obj = { a: 1, b: 2 }
console.log(obj.keys().length === 2)  // true
```

### 扩展数字

```js
Number.prototype.add = function(num) {
  return this + num
}
var n = 5

// 用数字变量验证
console.log(n.add(3) === 8) // Uncaught SyntaxError: Invalid or unexpected token（语法解析器不能处理字面量）
// 用数字表达式验证
console.log((5).add(3) === 8) // Uncaught SyntaxError: Invalid or unexpected token（语法解析器不能处理字面量）
// 用数字字面量验证
console.log(5.add(3) === 8) // Uncaught SyntaxError: Invalid or unexpected token（语法解析器不能处理字面量）
```
