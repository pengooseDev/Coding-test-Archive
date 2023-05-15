const [n, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const [max, _] = n.split(' ').map(Number);
const myMap = new Map();

for (let i = 0; i <= input.length - 1; i++) myMap.set(input[i], i);
const sortedArr = [...myMap].sort((a, b) => a[1] - b[1]).map((v) => v[0]).splice(0, max);

console.log(sortedArr.join('\n'));
