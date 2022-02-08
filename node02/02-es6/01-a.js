// 注意：
// 使用es6的新语法导入导出需要给 package.json 里面添加"type": "module", 属性

// 导入方法1： default导出的数据 ，不能解构,空对象接收
/* import obj from './02-b.js'
console.log(obj)
obj.c() */

// 导入方法2:
// 按需导出的数据，必须解构导入
import {
  e,
  f,
  g,
  h
} from './02-b.js'

console.log(e)
console.log(f)
console.log(g)
console.log(h)
h()