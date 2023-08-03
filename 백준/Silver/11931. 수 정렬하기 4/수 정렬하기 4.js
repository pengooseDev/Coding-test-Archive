const [_, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n').map(Number);
console.log(input.sort((a, b) => b - a).join('\n'));