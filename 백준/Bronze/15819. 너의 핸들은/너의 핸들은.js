const [N, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const [_, q] = N.split(' ').map(Number);
const sa = input.sort();
console.log(sa[q - 1]);