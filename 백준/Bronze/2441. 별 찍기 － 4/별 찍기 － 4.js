const n = Number(require("fs").readFileSync("/dev/stdin").toString());
console.log(new Array(n).fill(1).map((_, i) => `${' '.repeat(i)}${'*'.repeat(n-i)}\n`).join(''));
