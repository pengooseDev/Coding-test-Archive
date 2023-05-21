const [_, n, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
let answer = '';
const numbers = n.split(' ').map(Number);
const cache = [];
cache[0] = numbers[0];

for (let i = 1; i <= numbers.length - 1; i++) cache[i] = cache[i - 1] + numbers[i];
cache.unshift(0);

for (let i of input) {
    const [s, e] = i.split(' ').map((v) => (Number(v)));
    const res = cache[e] - cache[s - 1];
    answer += `${res}\n`
}

console.log(answer);
