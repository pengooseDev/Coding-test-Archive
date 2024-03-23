const [N, A] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const arr = A.split(' ').map(Number);

const dp = Array(Number(N) + 1).fill(0);
let answer = 0;

for (let i = 0; i < N; i++) {
  dp[arr[i]] = dp[arr[i] - 1] + 1;
  answer = Math.max(answer, dp[arr[i]]);
}

console.log(N - answer);