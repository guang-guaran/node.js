// 1. 导入moment模块
const moment = require('moment')

// 2.1 获取固定日期的时间 
let bar = moment().format()
console.log(bar)

// 2.2 获取指定日期的时间
let dt = new Date('1111-11-11 11:11:11')
let foo = moment(dt).format('YYYY-MM-DD HH:mm:ss')
console.log(foo)