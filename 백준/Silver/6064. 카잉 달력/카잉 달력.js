const [_, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

let answer = '';
for (let i of input) {
    const [M, N, x, y] = i.split(' ').map(Number);
    let year = x;

    while(year <= M * N) {
        if(year % N === y % N) {
            answer += `${year}\n`;
            break;
        }

        year += M;
    }

    if(year > M * N) answer += `-1\n`;
}

console.log(answer);