const [n, m] = require("fs").readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);

let answer = '';
let combination = [];

const dfs = (index) => {
    if (index === m) return answer += `${combination.join(' ')}\n`;

    for (let i = 1; i <= n; i++) {
        combination[index] = i;
        dfs(index + 1);
    }
}

dfs(0);
console.log(answer);