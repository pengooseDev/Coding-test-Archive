const [_, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

console.log(input.map((s) => {
    const res = s.split('').filter((v) => v !== ' ').map((v) => Number(v.charCodeAt(0)) - 64).reduce((acc, curr) =>  acc + curr);
    
    return res === 100 ? 'PERFECT LIFE' : res;
}).join('\n'));
