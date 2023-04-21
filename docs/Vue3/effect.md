# effect 流程

## 触发响应式对象的 get

1. 实例化 ReactiveEffect => \_effect
2. 调用 \_effect 的方法 run()
3. run() 方法：将实例化对象 activeEffect 存到全局（方便后续触发依赖是调用），然后调用 effect 的回调函数 fn
4. fn() 方法：触发响应式对象的 get 方法，然后触发 track 方法，然后触发 trackEffects 方法收集依赖（activeEffect），

## 触发响应式对象的 set

1. target 的值改变时，触发 set 方法，然后调用 trigger 方法触发依赖
2. trigger 方法：找到 target 的依赖集合，遍历调用依赖的 run 方法
3. run 方法调用 fn 方法，从而触发 get 方法
4. 接下来的操作和上面 👆🏻 步骤 4 一致！！!

```ts
// 单测内容
it('should observe basic properties', () => {
  let dummy
  const counter = reactive({ num: 0 })
  effect(() => (dummy = counter.num))

  expect(dummy).toBe(0)
  counter.num = 7
  expect(dummy).toBe(7)
})
```
