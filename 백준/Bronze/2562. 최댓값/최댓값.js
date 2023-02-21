const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n').map((v) => Number(v));
console.log(Math.max(...input));
console.log(input.indexOf(Math.max(...input)) + 1);