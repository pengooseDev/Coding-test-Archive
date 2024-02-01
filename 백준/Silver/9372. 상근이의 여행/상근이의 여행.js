const [T, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
let answer = '';

for (let i = 0; i < T; i++) {
    const [N, M] = input.shift().split(' ').map(Number);
    input.splice(0, M);
    answer += `${(N-1)}\n`;
}

console.log(answer);

