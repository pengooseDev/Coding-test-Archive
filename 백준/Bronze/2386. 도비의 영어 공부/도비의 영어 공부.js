const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
input.pop();

const answer = input.map((v) => {
    let res = 0;
    const arr = v.split('');
    const target = arr.shift();

    for (let i of arr) target.toUpperCase() === i.toUpperCase() ? res++ : null;

    return `${target} ${res}`;
});

console.log(answer.join('\n'));