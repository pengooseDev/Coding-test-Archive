const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const splitArr = input.split('\n');
const [n, _] = splitArr.shift();
const nArr = splitArr.splice(0, n);
const myMap = new Map();

for (let i of nArr) myMap.set(i, 0);
for (let i of splitArr) myMap.set(i, myMap.get(i) + 1 || 0);
const res = [...myMap].filter(([key, value]) => value === 1).map((v) => v[0]).sort();

console.log(res.length);
for (let i of res) console.log(i);
