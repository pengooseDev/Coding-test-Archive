const [n, m] = require("fs").readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);
let answer = '';
let temp = [];
let checker = new Array(n).fill(0);

const dfs = (index) => {
    if (index === m) return answer += `${temp.join(' ')}\n`;

    for (let i = 1; i <= n; i++) {
        if (checker[i - 1]) continue;
        checker[i - 1] = 1;
        temp[index] = i;
        dfs(index + 1);
        checker[i - 1] = 0;
    }
}

dfs(0);
console.log(answer);