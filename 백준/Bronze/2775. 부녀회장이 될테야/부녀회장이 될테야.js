const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const myArr = input.split('\n').map((v) => Number(v));
myArr.shift();

const getDP = () => {
    const dp = new Array(15);
    dp[0] = [];
    for (let i = 1; i <= 14; i++) {
        dp[i] = [];
        dp[i][0] = 0;
        dp[i][1] = 1;
        dp[0][i] = i;
    }

    for (let i = 1; i <= 14; i++) {
        for (let j = 1; j <= 14; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }

    return dp;
}

/* Solution */
const myDp = getDP();

for (let i = 0; i <= myArr.length - 1; i += 2) {
    console.log(myDp[myArr[i]][myArr[i + 1]]);
}