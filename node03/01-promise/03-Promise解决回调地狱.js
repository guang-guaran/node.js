// 导入 fs 模块
import fs from "fs";

// 创建Promise对象;
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
const p2 = new Promise((resolve, reject) => {
  // 在函数中，一定要有异步代码;
  fs.readFile('./txt/b.txt', 'utf8', (err, data) => {
    if (err) {
      // 有错误，就把错误通过 reject 放到fs.readFile() 外面;
      reject(err)
    } else {
      // 没有错误，就把读取到的信息，通过resolve放到fs.readFile() 外面;
      resolve(data)
    }
  })
})
const p3 = new Promise((resolve, reject) => {
  // 在函数中，一定要有异步代码;
  fs.readFile('./txt/c.txt', 'utf8', (err, data) => {
    if (err) {
      // 有错误，就把错误通过 reject 放到fs.readFile() 外面;
      reject(err)
    } else {
      // 没有错误，就把读取到的信息，通过resolve放到fs.readFile() 外面;
      resolve(data)
    }
  })
})

// 读取文件
const a = p1.then(res => {
  console.log(res)
  return p2
})
const b = a.then(res => {
  console.log(res)
  return p3
})
const c = b.then(res => {
  console.log(res)
})