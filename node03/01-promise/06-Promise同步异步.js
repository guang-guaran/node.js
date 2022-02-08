//  1,2,3,5,4 - then()是异步;
console.log(1);
new Promise((resolve, reject) => {
  console.log(2);
  resolve();
  console.log(3);
}).then(res => {
  console.log(4);
})
console.log(5)