const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n').map((v) => v.split(' ')).filter(([q,w,e]) => e !== 'P');

const map = {
    'A+': 4.5,
    'A0': 4,
    'B+': 3.5,
    'B0': 3,
    'C+': 2.5,
    'C0': 2,
    'D+': 1.5,
    'D0': 1,
    'F': 0,
}

let answer = [];
let count = 0;

input.forEach((data, i) => {
    const [, v, s] = data;
    answer.push(Number(v) * Number(map[s]));
    count += Number(v);
})

console.log((answer.reduce((acc, curr) => acc += curr) / count).toFixed(6));