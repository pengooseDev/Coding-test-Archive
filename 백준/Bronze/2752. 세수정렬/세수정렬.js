const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(' ').map(Number).sort((a, b) => a - b).join(' ');
console.log(input);