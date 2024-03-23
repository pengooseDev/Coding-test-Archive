const [_, N, __, ...A] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const arr = N.split(' ').map(Number);
const Q = A.map((v) => v.split(' ').map(Number));

const dp = Array.from({ length: arr.length }, () => Array(arr.length).fill(0));

for (let i = 0; i < arr.length; i++) dp[i][i] = 1;

for (let i = 0; i < arr.length - 1; i++)
  if (arr[i] === arr[i + 1]) dp[i][i + 1] = 1;

for (let i = 2; i < arr.length; i++)
  for (let j = 0; j + i < arr.length; j++)
    if (arr[j] === arr[j + i] && dp[j + 1][j + i - 1]) dp[j][j + i] = 1;

let answer = '';

for (let i = 0; i < Q.length; i++) {
  const [s, e] = Q[i];
  answer += dp[s - 1][e - 1] + '\n';
}

console.log(answer);
