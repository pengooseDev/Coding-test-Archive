const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const N = input.length;

const dp = Array(N).fill(Infinity);
dp[0] = 1;

const check = Array.from({ length: N }, () => Array(N).fill(false));

for (let i = 0; i < N; i++) {
  check[i][i] = true;
  if (i < N - 1 && input[i] === input[i + 1]) {
    check[i][i + 1] = true;
  }
}

for (let len = 2; len <= N; len++) {
  for (let start = 0; start <= N - len; start++) {
    const end = start + len - 1;

    if (input[start] === input[end] && check[start + 1][end - 1])
      check[start][end] = true;
  }
}

for (let i = 1; i < N; i++) {
  if (check[0][i]) {
    dp[i] = 1;

    continue;
  }

  for (let j = 0; j < i; j++)
    if (check[j + 1][i]) dp[i] = Math.min(dp[i], dp[j] + 1);
}

console.log(dp[N - 1]);
