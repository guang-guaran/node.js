// then-fs导入
import thenFs from 'then-fs';

// 定义一个用async修饰的函数
async function fn() {
    // 按照顺序读取文件信息
    const str1 = await thenFs.readFile('./txt/a.txt', 'utf8');
    console.log(str1);
    const str2 = await thenFs.readFile('./txt/b.txt', 'utf8');
    console.log(str2);
    const str3 = await thenFs.readFile('./txt/c.txt', 'utf8');
    console.log(str3);
}

// 函数不调用，不执行
fn();
