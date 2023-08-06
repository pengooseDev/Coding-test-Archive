const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const N = parseInt(input.shift());

let prev = null, next = null;

for (let i = 0; i < N; i++) {
    if (input[i] === '?') {
        if (i !== 0) prev = input[i - 1];
        if (i !== N - 1) next = input[i + 1];
    }
}

const preA = input.splice(0, N);
const mySet = new Set();
for (let i of preA) if (i !== "?") mySet.add(i);


const target = [prev ? prev[prev.length - 1] : null, next ? next[0] : null];
const T = parseInt(input.shift());

let answer = null;
for (let i = 0; i < T; i++) {
    if (target[0] === null && input[i][input[i].length - 1] === target[1] && !mySet.has(input[i])) {
        answer = input[i];

        break;
    }

    if (target[1] === null && input[i][0] === target[0] && !mySet.has(input[i])) {
        answer = input[i];

        break;
    }

    if (input[i][0] === target[0] && input[i][input[i].length - 1] === target[1] && !mySet.has(input[i])) {
        answer = input[i];
        
        break;
    }
}

N !== 1 ? console.log(answer) : console.log(input[0]); 