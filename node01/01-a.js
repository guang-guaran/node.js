// 把 01-a.js 作为主模块, 导入子模块;
// 导入模块
let obj = require('./02-b.js')
console.log(obj)
obj.fn1()
// obj.fn2() 因为没有导出fn2 所以不能调用fn2的方法