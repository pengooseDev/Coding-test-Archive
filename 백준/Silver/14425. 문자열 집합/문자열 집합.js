const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const splitArr = input.split('\n');
const [n, _] = splitArr.shift().split(' ').map((v) => Number(v));
const nArr = splitArr.splice(0, n);
const mArr = splitArr;
const myMap = new Map();
let answer = 0;

for (let i of nArr) myMap.set(i, 1);
for (let j of mArr) myMap.has(j) ? answer++ : "";

console.log(answer);