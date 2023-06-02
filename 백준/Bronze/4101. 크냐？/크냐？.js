const [...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
input.pop();

let answer = '';
for (let i of input) {
    const [x, y] = i.split(' ').map(Number);
    if (x > y) answer += 'Yes\n';
    if (x <= y) answer += 'No\n';
}

console.log(answer);