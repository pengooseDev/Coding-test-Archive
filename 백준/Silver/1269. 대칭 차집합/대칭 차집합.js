const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const splitArr = input.split('\n');
splitArr.shift();
const [aArr, bArr] = splitArr.map((v) => v.split(' ').map((v) => Number(v)));
const [aMap, bMap] = [new Map(), new Map()];

for (let i of aArr) aMap.set(i, aMap.get(i) + 1 || 1);
for (let i of bArr) bMap.set(i, bMap.get(i) + 1 || 1);
for (let i of bArr) aMap.set(i, aMap.get(i) - 1 || 0);
for (let i of aArr) bMap.set(i, bMap.get(i) - 1 || 0);

let answer = 0;
aMap.forEach((v, i) => v ? answer++ : '');
bMap.forEach((v, i) => v ? answer++ : '');

console.log(answer);