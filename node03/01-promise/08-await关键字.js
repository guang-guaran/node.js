// 1.await只能出现在async修饰的函数中！
// 2.await后面跟随的是一个promise对象;
// 3.await能停止代码执行，让后面的同步代码，先执行;
// 4.await返回的是: Promise对象中的then()中的回调函数中的参数res;
//  总结: await 替代了then(), 也不需要连式编程了;
async function getPromise() {
    return '哈哈哈';
}

console.log(1);
// 1.await只能出现在async修饰的函数中！
async function fn() {
    console.log(2);
    // 2.await后面跟随的是一个promise对象;
    let str = await getPromise();
    console.log(str);
    console.log(4);
}

fn();
console.log(3);
