const [_, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
let w = Array(26).fill(0);
let answer = 0;

for (let i of input) {
    let temp = 1;
    
    for (let j = i.length - 1; j >= 0; j--) {
        const charCode = i[j].charCodeAt() - 65;
        w[charCode] += temp;
        temp *= 10;
    }
}

w.sort((a, b) => b - a);

for (let i = 0; i < 10; i++) answer += w[i] * (9 - i);

console.log(answer);