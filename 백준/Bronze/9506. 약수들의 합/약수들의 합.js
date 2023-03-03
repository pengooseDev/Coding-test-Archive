const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n').map((v) => Number(v));
input.pop();

const answerArr = input.map((v) => {
    const res = [];
    for (let i = 1; i <= Math.sqrt(v); i++) {
        if ((v % i) === 0) res.push(i);
    }

    for (let i of [...res]) res.push(v / i);
    res.sort((a, b) => a - b);
    const num = res.pop();
    if (num === res.reduce((acc, curr) => acc += curr)) return console.log(`${num} = ${res.join(' + ')}`)
    return console.log(`${num} is NOT perfect.`)
})