const [_, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const res = input.map((v) => v.split(' ').map((v) => Number(v))).flat().sort((a, b) => a - b);
console.log(res.join(' '));