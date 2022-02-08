// 把 02-b.js 作为子模块，被主模块导入
let str1 = '我是str1'
let str2 = '我是str2'
let fn1 = () => console.log('我是fn1')
let fn2 = () => console.log('我是fn2')

// // 导出方法1
// module.exports.str1 = str1
// // module.exports.str2 = str2
// module.exports.fn1 = fn1
// // module.exports.str2 = str2

// 导出方法2
module.exports = {
  str1,
  fn1
}