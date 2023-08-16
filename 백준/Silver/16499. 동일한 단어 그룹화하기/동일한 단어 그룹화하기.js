const [_, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const mySet = new Set();
for (let i of input) mySet.add(i.split('').sort().join(''))
console.log(mySet.size);