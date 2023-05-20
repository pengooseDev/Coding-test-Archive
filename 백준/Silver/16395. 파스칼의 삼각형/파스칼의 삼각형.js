const [x, y] = require("fs").readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);

const solution = (n, k) => {
    if (n === 1) return console.log(1);
    if (n === 2) return console.log(1);

    const dp = new Array(n).fill('').map((v) => new Array(n).fill(0));
    dp[0][0] = 1;
    dp[1][0] = 1;
    dp[1][1] = 1;

    for (let i = 2; i <= n - 1; i++) {
        dp[i][0] = 1;
        for (let j = 1; j <= n - 1; j++) dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
    }

    return console.log(dp[n - 1][k - 1]);
}

solution(x, y)
/*
1
1 1
1 2 1
1 3 3 1
1 4 6 4 1
1 5 10 10 5 1
*/