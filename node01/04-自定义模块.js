// 自定一个一个函数，首字母大写，其他的小写;
function setString(str) {
  // 1. 首字母大写
  let str1 = str[0].toUpperCase()
  // 2. 其余字母小写
  let str2 = str.slice(1).toLowerCase()
  return str1 + str2
}

// 导出
module.exports = {
  setString
}