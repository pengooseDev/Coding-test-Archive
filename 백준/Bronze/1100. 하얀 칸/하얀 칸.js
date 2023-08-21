const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
let answer = 0;
for (let r = 0; r < input.length; r++) input[r].split('').forEach((v, i) => (r % 2 === 0) ? (i % 2 === 0 && v === 'F') ? answer++ : null : (i % 2 === 1 && v === 'F') ? answer++ : null);
console.log(answer);