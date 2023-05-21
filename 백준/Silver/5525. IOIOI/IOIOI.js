const [n, m, input] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

let target = 'I';
for (let i = 1; i <= Number(n); i++) target += 'OI';
let answer = 0;
let index = 0;

while (index <= input.length - 1) {
    const res = input.substring(index, index + target.length);
    if (res === target) {
        index += 2;
        answer++;
        continue;
    } else {
        index++;
    }
}

console.log(answer);