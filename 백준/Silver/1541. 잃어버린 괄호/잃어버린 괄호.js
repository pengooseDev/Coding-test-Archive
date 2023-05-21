const [initial, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split('-');

let answer = initial.split('+').map(Number).reduce((acc, curr) => acc + curr);
for (let i of input) i.split('+').map((v) => answer -= Number(v));

console.log(answer);