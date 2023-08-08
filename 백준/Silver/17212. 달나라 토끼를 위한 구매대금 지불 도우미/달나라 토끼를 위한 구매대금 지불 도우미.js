const input = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
const coins = [1, 2, 5, 7];
let dp = Array(input + 1).fill(100001);
dp[0] = 0;

for (let coin of coins) for (let i = coin; i <= input; i++) dp[i] = Math.min(dp[i], dp[i - coin] + 1);
dp[input] != 100001 ? console.log(dp[input]) : console.log(-1);