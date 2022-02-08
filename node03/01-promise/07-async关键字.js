// async 用于修饰一个 function
//     async 修饰的函数，总是返回一个 Promise 对象
//     函数内的所有值，将自动包装在 resolve 的 promise 中
async function fn() {
  //     函数内的返回值，将自动包装在 resolve 的 promise 中
  return '哈哈哈';
}
// 函数不调用，不执行;
const a = fn();
// 输出查看
console.log(a);
a.then(res => {
  console.log(res);
})
console.log('我是最后一行代码');

// 总结: Promise对象的使用三个点: new  resolve  reject
//       async 帮我们解决了： new  resolve