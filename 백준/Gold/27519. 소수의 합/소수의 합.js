const [_, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n').map(Number);
const limit = 100000;
const mod = 1000000007;

const arr = new Array(limit + 1).fill(true);
arr[0] = arr[1] = false;
for (let i = 2; i * i <= limit; i++) {
    if (arr[i]) for (let j = i * i; j <= limit; j += i) arr[j] = false;
}

/* dp */
let answer = '';
let dp = new Array(limit + 1).fill(0);
dp[0] = 1;

for (let i = 2; i <= limit; i++) {
    if (arr[i]) {
        for (let j = i; j <= limit; j++) {
            dp[j] += dp[j - i];
            dp[j] %= mod;
        }
    }
}

for (let i of input) answer += `${dp[i]}\n`
console.log(answer);