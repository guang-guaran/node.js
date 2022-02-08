// 导入 fs 模块
import fs from 'fs';

// 封装一个方法，返回一个 Promise 对象;
function getPromise(url) {
  return new Promise((resolve, reject) => {
    // 在函数中，一定要有异步代码;
    fs.readFile(url, 'utf8', (err, data) => {
      if (err) {
        // 有错误，就把错误通过 reject 放到fs.readFile() 外面;
        reject(err)
      } else {
        // 没有错误，就把读取到的信息，通过resolve放到fs.readFile() 外面;
        resolve(data)
      }
    })
  })
}

getPromise('./txt/a.txt').then(res => {
  console.log(res)
  return getPromise('./txt/b.txt')
}).then(res => {
  console.log(res)
  return getPromise('./txt/c.txt')
}).then(res => {
  console.log(res)
})