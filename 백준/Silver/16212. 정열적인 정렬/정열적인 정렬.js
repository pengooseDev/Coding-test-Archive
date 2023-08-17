const [_, input] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
console.log(input.split(' ').map(Number).sort((a, b) => a- b).join(' '));