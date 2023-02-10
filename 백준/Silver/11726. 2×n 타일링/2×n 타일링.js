const input = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

const dp = [0, 1, 2];
for (let i = 3; i <= input; i++) dp[i] = (dp[i - 2] + dp[i - 1] % 10007);

console.log((dp[input] % 10007))