const [N, ...A] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const dp = Array.from({ length: N }, () => Array(Number(N)).fill(0));
const arr = A.map((v) => v.split(' ').map(Number));

for (let i = 1; i < N; i++) {
  for (let j = 0; j < N - i; j++) {
    dp[j][j + i] = Infinity;

    for (let k = j; k < j + i; k++) {
      const q = dp[j][k] + dp[k + 1][j + i] + arr[j][0] * arr[k][1] * arr[j + i][1];
      const w = dp[j][j + i];

      dp[j][j + i] = Math.min(q, w);
    }
  }
}

console.log(dp[0][N - 1]);

