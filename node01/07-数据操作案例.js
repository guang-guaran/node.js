// 1.我们有一个json文件，可以读取文件中所有的信息;
// 2.把信息转换为对象，然后进行增删改查(四个方法);
// 3.最后把满足条件的数据，转换为json写入文件中;
// 导入fs模块, 和path模块
const fs = require('fs')
const path = require('path')
// 拼接json文件的绝对路径
const url = path.join(__dirname, './data.json')

// 查
function getData() {
  fs.readFile(url, 'utf8', (err, data) => {
    if (err) {
      return console.log(err.message)
    }
    console.log(JSON.parse(data))
  })
}
// getData()
// 增
function addData(obj) {
  fs.readFile(url, 'utf8', (err, data) => {
    if (err) {
      return console.log(err.message)
    }
    // console.log(JSON.parse(data))
    let arr = JSON.parse(data)
    obj.id = arr[arr.length - 1].id + 1
    arr.push(obj)
    fs.writeFile(url, JSON.stringify(arr), err => {
      if (err) {
        return console.log(err.message)
      }
      console.log("恭喜您！写入成功")
    })
  })
}
// addData({
//   author: "刘慈欣",
//   bookname: "三体3-宇宙永生",
//   publisher: "武汉人民出版社"
// })
// 删
function delData(id) {
  fs.readFile(path.join(__dirname, './data.json'), 'utf8', (err, data) => {
    if (err) return console.log(err.message)
    let arr = JSON.parse(data)
    // console.log(arr)
    let newArr = arr.filter(item => item.id !== id)
    fs.writeFile(path.join(__dirname, './data.json'), JSON.stringify(newArr), err => {
      if (err) return console.log(err.message)
      console.log('恭喜您！删除数据成功')
    })
  })
}
// delData(5)
// 改
function editData(obj) {
  fs.readFile(path.join(__dirname, './data.json'), 'utf8', (err, data) => {
    if (err) return console.log(err.message)
    let arr = JSON.parse(data)
    let index = arr.findIndex(item => item.id == obj.id)
    arr.splice(index, 1, obj)
    // console.log(arr)
    fs.writeFile(path.join(__dirname, './data.json'), JSON.stringify(arr), err => {
      if (err) return console.log(err.message)
      console.log('恭喜您！修改数据成功')
    })

  })
}
editData({
  "author": "大刘",
  "bookname": "三体1-地球往事",
  "publisher": "河南人民出版社",
  "id": 5
})