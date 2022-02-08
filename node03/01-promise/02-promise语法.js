import fs from 'fs'
// 创建Promise对象, 参数是一个函数，有两个形参;
//   resolve: 解析，一般用于处理成功后的数据;
//   reject : 拒绝，一般用于处理失败后的数据;
const p1 = new Promise((resolve, reject) => {
  // 在函数中，一定要有异步代码;
  fs.readFile('./txt/a.txt', 'utf8', (err, data) => {
    if (err) {
      // 有错误，就把错误通过 reject 放到fs.readFile() 外面;
      reject(err)
    } else {
      // 没有错误，就把读取到的信息，通过resolve放到fs.readFile() 外面;
      resolve(data)
    }
  })
})

// p1里面就存储着 resolve 和 reject 抛出的值！ then(resolve 抛出的值, reject 抛出的值)
// then() 可以接收两个参数，第一个函数处理成功，第二个函数处理失败;

// 单独打印成功的结果，简写
p1.then(res => console.log(res))

// 两个参数成功和失败 
p1.then(res => {
  console.log(res)
}, err => {
  console.log(err.message)
})

// 用两个方法 then 处理成功，catch处理失败
p1.then(res => {
  console.log(res)
}).catch(err => {
  console.log('文件读取错误: ' + err.message)
})