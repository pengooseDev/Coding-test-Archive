const [N, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n').map(Number);

const answer = input.reduce((acc, curr) => acc + curr) - N + 1;
console.log(answer);