const [_, input] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
console.log(Math.max(...input.split(' ').map(Number).sort((a, b) => b - a).map((v, i) => v + i + 2)));