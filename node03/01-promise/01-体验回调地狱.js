import fs from 'fs'

// 读取文件
fs.readFile('./txt/a.txt', 'utf8', (err, data) => {
  console.log(data)
  fs.readFile('./txt/b.txt', 'utf8', (err, data) => {
    console.log(data)
    fs.readFile('./txt/c.txt', 'utf8', (err, data) => {
      console.log(data)
    })
  })
})