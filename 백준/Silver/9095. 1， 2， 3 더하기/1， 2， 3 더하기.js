const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const numArr = input.split('\n');
numArr.shift();

const solution = (number) => {
    number = Number(number);
    if (number === 1) return 1;
    if (number === 2) return 2;
    if (number === 3) return 4;
    
    const dp = [0, 1, 2, 4];
    for (let i = 4; i <= number; i++) {
        dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
    }

    return dp[number];
}

const answer = numArr.map((v) => solution(v));
for (let i of answer) console.log(i);
