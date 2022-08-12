<template>
  <div>
    <blockquote>
      <p>
        在 JavaScript
        中，函数是第一型对象，也就是说函数可以共处，可以将其视为其他任意类型的
        JavaScript 对象。就像普通的 JavaScript
        数据类型，函数可以被任意变量进行引用，或声明称对象字面量，甚至可以将其作为函数参数进行传递。
      </p>
    </blockquote>
    <h2 id="函数是第一型对象" tabindex="-1">
      <a class="header-anchor" href="#函数是第一型对象" aria-hidden="true">#</a>
      函数是第一型对象
    </h2>
    <p>对象在 JavaScript 中有如下功能：</p>
    <ul>
      <li>可以通过字面量进行创建</li>
      <li>可以赋值给变量、数组或其他对象的属性</li>
      <li>可以作为参数传递给函数</li>
      <li>可以作为函数的返回值进行返回</li>
      <li>可以拥有动态创建并赋值的属性</li>
    </ul>
    <blockquote>
      <p>
        在 JavaScript
        中，函数拥有全部这些功能，也就是说可以像这门语言的其他对象一样使用。因此，我们说函数是第一型对象。
      </p>
    </blockquote>
    <blockquote>
      <p>
        除了可以像其他对象类型一样使用外，函数还有一个特殊的功能，他们可以被调用。
        这些调用通常以异步方式进行调用。
      </p>
    </blockquote>
    <h2 id="函数声明" tabindex="-1">
      <a class="header-anchor" href="#函数声明" aria-hidden="true">#</a>
      函数声明
    </h2>
    <blockquote>
      <p>
        JavaScript
        函数是使用函数字面量进行声明从而创建函数值的，就像使用数字字面量创建数字值一样。记住，作为第一型对象，函数可以像其他值一样在语言中使用，比如字符串和数字。
      </p>
    </blockquote>
    <p>函数字面量由四个部分组成：</p>
    <ol>
      <li>function 关键字</li>
      <li>可选名称，如果指定名称，则必须是一个有效的JavaScript标志符</li>
      <li>
        符号内部，一个以逗号分隔的参数列表。各个参数名称必须是有效的标志符，而且参数列表允许为空。即使是空参数列表，圆括号也必须始终存在
      </li>
      <li>
        函数体，包含一个大括号内的一系列 JavaScript
        语句。函数体可以为空，但大括号必须始终存在
      </li>
    </ol>
    <h2 id="作用域和函数" tabindex="-1">
      <a class="header-anchor" href="#作用域和函数" aria-hidden="true">#</a>
      作用域和函数
    </h2>
    <blockquote>
      <p>
        当我们声明一个函数时，我们不仅要关注该函数可用的作用域，还要关注该函数自身所创建的作用域，以及函数内部的声明是如何影响这些作用域。在
        JavaScript 中，作用域是由 function
        进行声明的，而不是代码块。声明的作用域创建于代码块，但不是终结于代码块。
      </p>
    </blockquote>
    <div class="language-javascript ext-js line-numbers-mode">
      <pre v-pre class="language-javascript"><code>if (window) {
  var x = 123;
}
alert(x) // 弹出 123
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <h2 id="函数调用" tabindex="-1">
      <a class="header-anchor" href="#函数调用" aria-hidden="true">#</a>
      函数调用
    </h2>
    <p>调用方式：</p>
    <ol>
      <li>作为一个函数进行调用</li>
      <li>作为一个方法进行调用，在对象上进行调用，支持面向对象编程</li>
      <li>作为构造器进行调用，创建一个新对象</li>
      <li>通过 apply() 或 call() 方法进行调用</li>
    </ol>
    <div class="language-javascript ext-js line-numbers-mode">
      <pre v-pre class="language-javascript"><code>expression(arg1, arg2)
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
      </div>
    </div>
    <h3 id="从参数到函数形参" tabindex="-1">
      <a class="header-anchor" href="#从参数到函数形参" aria-hidden="true">#</a>
      从参数到函数形参
    </h3>
    <blockquote>
      <p>
        当一个参数列表作为函数调用的一部分时，这些参数会按照函数声明里的形参声明顺序，将参数值分别赋值给这些形参
      </p>
    </blockquote>
    <p>
      如果传入的参数个数和声明的形参数量不一致，不会抛错，JavaScript 处理策略：
    </p>
    <ul>
      <li>
        如果实际传递的参数数量大于函数声明的形参数量，超出的参数则不会配给形参名称；但依旧有办法获取它们
      </li>
      <li>
        如果实际传递的参数数量小于于函数声明的形参数量，则没有对应参数的形参会赋值为
        undefined
      </li>
    </ul>
    <blockquote>
      <p>
        <strong>注意：</strong> 所有函数调用会传递两个隐式参数：arguments 和
        this
      </p>
    </blockquote>
    <ol>
      <li>
        arguments
        参数：<strong>传递给函数的所有参数的一个集合</strong>，该集合有一个
        length
        属性，其值是全部参数的个数，单个参数值可以像访问数组索引一样进行获取，但不能使用数组的各种方法。只需将
        arguments
        想象成一个<strong>类数组结构</strong>，并且只拥有数组的某些特性。
      </li>
      <li>
        this参数：一个函数被调用时，除了传入了函数的显式参数以外，名为 this
        的隐式参数也被传入了函数。this
        参数引用了与该函数调用进行隐式关联的一个对象，被称之为<strong
          >函数上下文</strong
        >
      </li>
    </ol>
    <h3 id="作为函数调用" tabindex="-1">
      <a class="header-anchor" href="#作为函数调用" aria-hidden="true">#</a>
      作为函数调用
    </h3>
    <div class="language-javascript ext-js line-numbers-mode">
      <pre v-pre class="language-javascript"><code>function func() {}
func()

var func1 = function() {}
func1()
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <h3 id="作为方法进行调用" tabindex="-1">
      <a class="header-anchor" href="#作为方法进行调用" aria-hidden="true">#</a>
      作为方法进行调用
    </h3>
    <blockquote>
      <p>
        当一个函数被赋值给对象的一个属性，并并使用引用该函数的这个属性进行调用时，那么函数就作为该对象的一个方法进行调用的
      </p>
    </blockquote>
    <div class="language-javascript ext-js line-numbers-mode">
      <pre v-pre class="language-javascript"><code>var obj = {}
obj.func = function() {}
obj.func()
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <h3 id="作为构造器进行调用" tabindex="-1">
      <a class="header-anchor" href="#作为构造器进行调用" aria-hidden="true"
        >#</a
      >
      作为构造器进行调用
    </h3>
    <blockquote>
      <p>
        将函数作为构造器进行调用，我们要在函数调用前使用
        <code v-pre>new</code> 关键字
      </p>
    </blockquote>
    <div class="language-javascript ext-js line-numbers-mode">
      <pre
        v-pre
        class="language-javascript"
      ><code>function func() { return this; }
const newFunc = new func()
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <h4 id="构造器的超能力" tabindex="-1">
      <a class="header-anchor" href="#构造器的超能力" aria-hidden="true">#</a>
      构造器的超能力
    </h4>
    <p>
      将函数作为构造器进行调用，是
      <code v-pre>JavaScript</code>
      的一个超特性，因为构造器调用时，如下特殊行为会发生：
    </p>
    <ol>
      <li>创建一个新的空对象</li>
      <li>传递给构造器的对象是 this 参数，从而成为构造器的函数上下文</li>
      <li>如果没有显式的返回值，新创建的对象则作为构造器的返回值进行返回</li>
    </ol>
    <blockquote>
      <p>
        构造器的目的是要创建一个新对象并对其进行设置，然后将其作为构造器的返回值进行返回。任何干扰这种意图的函数都不适合作为构造器
      </p>
    </blockquote>
  </div>
</template>
