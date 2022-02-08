// 导入 核心/内置模块
const fs = require('fs')

// 导入path路径模块
const path = require('path')

fs.readFile(path.join(__dirname, './txt/a.txt'), 'utf8', (err, data) => {
  if (err) {
    return console.log(err.message)
  }
  console.log(data)
})

fs.readFile(path.join(__dirname, './txt/b.txt'), 'utf8', (err, data) => {
  if (err) {
    return console.log(err.message)
  }
  console.log(data)
})