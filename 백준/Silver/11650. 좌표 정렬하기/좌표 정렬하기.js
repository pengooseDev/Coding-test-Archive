const [_, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const arr = input.map((v) => v.split(' ').map(Number));
const sortedArr = arr.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];

    return a[0] - b[0];
})

let answer = '';
for (let i of sortedArr) answer += `${i.join(' ')}\n`;

console.log(answer);