const [_, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const answer = input.map((v) => v.split(' ')).sort((a, b) => Number(a[0]) - Number(b[0])).map((v) => v.join(' ')).join('\n');
console.log(answer);
