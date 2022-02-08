// 导入 核心/内置模块
const fs = require('fs')

// 导入path路径模块
const path = require('path')

fs.writeFile(path.join(__dirname, './txt/a.txt'), '我是新写入的aaa', err => {
  if (err) {
    return console.log(err.message)
  }
  console.log('恭喜您！写入成功')
})

fs.writeFile(path.join(__dirname, './txt/b.txt'), '我是新写入的bbb', err => {
  if (err) {
    return console.log(err.message)
  }
  console.log('恭喜您！写入成功')
})

fs.writeFile(path.join(__dirname, './txt/c.txt'), '我是新创建并写入的ccc', err => {
  if (err) {
    return console.log(err.message)
  }
  console.log('恭喜您！写入成功')
})