// 普通fs模块，readFile()返回 undefined ;
// then-fs模块，readFile()返回 Promise 对象;

// 导入then-fs
import thenFs from 'then-fs'

// 读取文件
thenFs.readFile('./txt/a.txt', 'utf8').then(res => {
  console.log(res)
  return thenFs.readFile('./txt/b.txt', 'utf8')
}).then(res => {
  console.log(res)
  return thenFs.readFile('./txt/c.txt', 'utf8')
}).then(res => {
  console.log(res)
})