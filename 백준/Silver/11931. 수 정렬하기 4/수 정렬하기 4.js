const [_, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n').map(Number);

const mySet = new Set();
for (let i of input) mySet.add(i);
console.log([...mySet].sort((a, b) => b - a).join('\n'));