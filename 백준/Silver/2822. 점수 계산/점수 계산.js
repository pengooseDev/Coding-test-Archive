const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n').map(Number);
const sortedArr = [...input].sort((a, b) => b - a).slice(0, 5);
console.log(`${sortedArr.reduce((acc, curr) => acc + curr)}\n${input.map((v, i) => sortedArr.includes(v) ? i + 1 : false).filter(Number).join(' ')}`);