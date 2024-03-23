const [N, ...arr] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const e = arr.map((v) => v.split(' ').map(Number));

let sum = 0;
for (let i = 0; i < N - 1; i++)
  sum += e[i][0] * e[i + 1][1] - e[i][1] * e[i + 1][0];

sum += e[N - 1][0] * e[0][1] - e[N - 1][1] * e[0][0];

console.log((Math.abs(sum) / 2).toFixed(1));
