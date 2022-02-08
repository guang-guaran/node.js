// 导出方法1： default导出 ，不能解构
/* export default {
  a: 1,
  b: 2,
  c: () => console.log('我是函数c'),
  d: [1, 'a', 'b', true],
} */

// 导出方法2： 按需导出
export let e = 2
export let f = '我好'
export const g = [2, 'c', 'd', false]
export function h() {
  console.log('我是函数h')
}