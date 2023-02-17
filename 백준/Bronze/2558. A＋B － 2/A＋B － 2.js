const [a, b] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n').map((v) => Number(v));
console.log(a + b)
