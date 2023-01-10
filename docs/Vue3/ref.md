
# 响应式 - ref

> `ref` 接收一个可选的 `value` 做为入参，接着直接调用 `createRef`
>
> `createRef` 先判断 `value` 是否已经是一个 `ref`, 如果是则直接返回，如果不是接着判断是不是浅观察，如果是浅观察直接构造一个 `ref` 返回，不是则将 `rawValue` 转换成 `reactive` 再构造一个 `ref` 返回
>
> 读取 `ref` 的值时，触发 `get` 方法，进行依赖收集；设置 `ref` 的值时，触发 `set` 方法，触发依赖的函数

```js
// Jest
it("作为值", () => {
  const a = ref(1); // 创建一个响应式的值
  let dummy;
  let calls = 0;
  // 收集依赖
  // 此时会自动运行一遍当前函数，运行当前函数 fn 遇到 a 时会触发 a 的 get 方法，并将当前依赖收集到 ref 的 dep 中
  effect(() => {
    // fn
    calls++;
    dummy = a.value;
  });
  expect(calls).toBe(1);  // ✅
  expect(dummy).toBe(1);  // ✅
  // 改变 a 的值时，会触发 a 的 set 方法，并去执行依赖 dep 中的函数 fn
  a.value = 2;  // 1 + 1 = 2
  expect(calls).toBe(2);  // ✅
  expect(dummy).toBe(2);  // ✅
});

it("作为对象", () => {
  const a = ref({
    count: 1,
  });
  let dummy;
  effect(() => {
    dummy = a.value.count;
  });
  expect(dummy).toBe(1);  // ✅
  a.value.count = 2;  // 1 + 1 = 2
  expect(dummy).toBe(2);  // ✅
});
```
