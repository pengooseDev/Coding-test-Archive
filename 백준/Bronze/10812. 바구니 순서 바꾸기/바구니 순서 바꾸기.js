const [number, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const [n, _] = number.split(' ').map((v) => Number(v));
let myArr = new Array(n).fill('').map((v, i) => i + 1);

for (let order of input) {
    const [start, end, mid] = order.split(' ').map(Number);
    const targetArr = myArr.splice(start - 1, end - start + 1);
    const mixedArr = [...targetArr.splice(mid - start, end - start + 1), ...targetArr];
    myArr.splice(start - 1, 0, ...mixedArr); 
}

console.log(...myArr);