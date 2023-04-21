# vue3 记录

![Vue3](./assets/vue3.png)

```ts
// 编译时
@vue/compiler-sfc: 解析 .vue 单文件成 js 文件 => 依赖于下面两个
@vue/compiler-core: 将 `<template>` 处理成 render 函数 (render函数用到的方法都在runtime里)
@vue/compiler-dom: 依赖 @vue/compiler-core

// 运行时
@vue/runtime-dom: 处理 dom 节点
@vue/runtime-core: 核心运行时 *
@vue/reactivity: 实现了vue响应式
```
