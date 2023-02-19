const [n, ...splitArr] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const myArr = splitArr.map((v)=>Number(v));
const dp = [myArr[0], Math.max(myArr[0] + myArr[1], myArr[0]), Math.max(myArr[0] + myArr[2], myArr[1] + myArr[2])];

for (let i = 3; i <= myArr.length - 1; i++) {
    dp[i] = Math.max(dp[i- 3] + myArr[i - 1] + myArr[i], dp[i - 2] + myArr[i]);
}

console.log(dp[n - 1])