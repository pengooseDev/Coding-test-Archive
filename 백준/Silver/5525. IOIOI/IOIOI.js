const [n, m, input] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
let answer = 0;
let target = 'I';
for (let i = 1; i <= Number(n); i++) target += 'OI';
for (let i = 0; i <= input.length - target.length; i++) input.substring(i, i + target.length) === target ? answer++ : null;

console.log(answer);