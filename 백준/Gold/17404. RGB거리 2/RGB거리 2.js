const [N, ...A] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((line) => line.split(' ').map(Number));

const dp = Array.from({ length: N + 1 }, () => Array(3).fill(0));
let answer = Infinity;

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++)
    j === i ? (dp[1][j] = A[0][j]) : (dp[1][j] = answer);

  for (let k = 2; k <= N; k++) {
    dp[k][0] = Math.min(dp[k - 1][1], dp[k - 1][2]) + A[k - 1][0];
    dp[k][1] = Math.min(dp[k - 1][0], dp[k - 1][2]) + A[k - 1][1];
    dp[k][2] = Math.min(dp[k - 1][0], dp[k - 1][1]) + A[k - 1][2];
  }

  for (let j = 0; j < 3; j++) if (j !== i) answer = Math.min(answer, dp[N][j]);
}

console.log(answer);
