const [N, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n').map(Number);
const MAX = 10000;
let answer = '';
const primes = new Array(MAX + 1).fill(true);
primes[0] = primes[1] = false;

for (let i = 2; i * i < MAX; i++) if (primes[i]) for (let j = i * i; j <= MAX; j += i) primes[j] = false;


for (let i of input) {
    for (let j = parseInt(i / 2); j > 0; j--) {
        if (primes[j] && primes[i - j]) {
            answer += `${j} ${i - j}\n`;
            break;
        }
    }
}

console.log(answer);