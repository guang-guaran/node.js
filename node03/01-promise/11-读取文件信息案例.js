// 封装四个方法: 增删改查; 要求返回信息;
//   利用：await + async + then-fs + es6模块化

// 0.导入模块
import fs from 'then-fs';

// 1.查询 - 提示: 返回的数据数据，被放入了 Promise 对象中！
async function getData() {
    // 读取信息 // await 必须出现在 async 修饰的函数中
    const str = await fs.readFile('./data.json', 'utf8');
    return JSON.parse(str);
}
// // 测试
// getData().then(res => {
//     console.log(res);
// });

// 2.添加 - 返回一个 Promise 对象;
async function addData(obj) {
    try {
        // 把Promise对象中的值取出来;
        const arr = await getData();
        // 向数组中添加数据
        obj.id = arr[arr.length - 1].id + 1;
        arr.push(obj);
        // 写入
        fs.writeFile('./data.json', JSON.stringify(arr));
        return '添加成功';
    } catch (e) {
        return '添加失败';
    }
}
// // 测试
// addData({
//     "author": "大刘",
//     "bookname": "三体2",
//     "publisher": "湖北人民出版社"
// }).then(res => {
//     console.log(res);
// })

// 3.删除 - 返回一个 Promise 对象;
async function delData(id) {
    try {
        // 获取数组
        const arr = await getData();
        // 删除元素id，和传递的id值相同的那一项
        //    过滤新数组，传递过来的id值，和元素的id值不相同，才有资格放入新数组;
        const newArr = arr.filter(ele => id != ele.id);
        // 写入文件 - 写入新数组！
        fs.writeFile('./data.json', JSON.stringify(newArr));
        return '删除成功';
    } catch (e) {
        return '删除失败';
    }
}
// // 测试 - id如果不存在，不会引起错误！
// delData(6).then(res => {
//     console.log(res);
// });

// 4.修改 - 返回一个 Promise 对象;
async function updateData(obj) {
    try {
        // 获取数组
        const arr = await getData();
        // 获取索引值，删除元素，添加元素;
        const index = arr.findIndex(ele => ele.id == obj.id);
        arr.splice(index, 1, obj);
        // 写入文件
        fs.writeFile('./data.json', JSON.stringify(arr));
        // 返回
        return '修改成功';
    } catch (e) {
        console.log(e.message);
        return '修改失败';
    }
}
// // 测试
// updateData({
//     "author": "刘慈欣",
//     "bookname": "三体3-死神永生",
//     "publisher": "湖北人民出版社",
//     "id": 5
// }).then(res => {
//     console.log(res);
// });

// 导出
export default {
    getData, addData, delData, updateData
}

