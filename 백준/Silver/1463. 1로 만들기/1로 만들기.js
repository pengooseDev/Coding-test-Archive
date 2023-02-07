const input = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

const solution = (number) => {
    const dp = new Array(number + 1).fill(0);

    for (let i = 2; i <= number; i++) {
        
        const myArr = [dp[i - 1], dp[i / 3], dp[i / 2]];
        const res = myArr.filter((v) => Number(v) || v === 0);

        dp[i] = Math.min(...res) + 1;
    }

    return dp[number];
}

console.log(solution(input));
