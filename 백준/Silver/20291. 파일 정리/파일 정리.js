const [_, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const myMap = new Map();
let answer = '';

for (let i of input) myMap.set(i.split('.')[1], myMap.get(i.split('.')[1]) + 1 || 1);
const res = [...myMap].sort((a, b) => a[0].localeCompare(b[0]));
for (let i of res) answer += `${i[0]} ${i[1]}\n`
console.log(answer)