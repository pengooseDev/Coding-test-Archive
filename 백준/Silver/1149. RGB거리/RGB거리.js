const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const myArr = input.split('\n')
myArr.shift();
const costArr = myArr.map((v) => v.split(' ').map((v) => Number(v)));

const dp = new Array(costArr.length + 1);
dp[0] = [0,0,0]

for (let i = 1; i <= costArr.length; i++) {
    dp[i] = [];
    dp[i][0] = Math.min(dp[i-1][1], dp[i-1][2]) + costArr[i - 1][0];
    dp[i][1] = Math.min(dp[i-1][0], dp[i-1][2]) + costArr[i - 1][1];
    dp[i][2] = Math.min(dp[i-1][0], dp[i-1][1]) + costArr[i - 1][2];
}

console.log(Math.min(...dp.at(-1)));