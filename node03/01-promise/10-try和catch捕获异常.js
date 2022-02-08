// then-fs导入
import thenFs from 'then-fs';

// 定义一个用async修饰的函数
async function fn() {
    try { // reject 处理有方法代替了
        // 按照顺序读取文件信息
        const str1 = await thenFs.readFile('./txt/a.txt', 'utf8');
        console.log(str1);
        const str2 = await thenFs.readFile('./txt/bbb.txt', 'utf8');
        console.log(str2);
        const str3 = await thenFs.readFile('./txt/c.txt', 'utf8');
        console.log(str3);
    } catch(e) {
        console.log("文件读取错误: " + e.message);
    } finally {
        console.log('无论有没有错误都要执行的代码...');
    }
}

// 函数不调用，不执行
fn();
