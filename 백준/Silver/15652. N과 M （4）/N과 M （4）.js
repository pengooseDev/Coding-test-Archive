const [n, m] = require("fs").readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);

let answer = '';
let combination = [];

const dfs = (index, start) => {
    if (index === m) return answer += `${combination.join(' ')}\n`;

    for (let i = start; i <= n; i++) {
        combination[index] = i;
        dfs(index + 1, i);
    }
}

dfs(0, 1);
console.log(answer);