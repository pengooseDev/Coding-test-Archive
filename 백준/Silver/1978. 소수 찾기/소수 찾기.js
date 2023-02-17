const [_, data] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const res = data.split(' ').map((v) => Number(v));
const isPrime = (number) => {
    for(let i = 2; i <= Math.sqrt(number); i++) if (number % i === 0) return false;

    return true;
}

let answer = 0;
for (let i of res) {
    if (i === 1) continue;
    if (i > 2 && i % 2 === 0) continue;
    isPrime(i) ? answer++ : '';
}

console.log(answer)