const [n, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
let answer = '';

const solution = (tc) => {
    let res = '';
    const sMap = new Map();
    const [s, q] = [tc[1], tc[3]];
    for (let i of s.split(' ')) sMap.set(i, 1);
    for(let i of q.split(' ')) sMap.has(i) ? res += '1\n' : res += '0\n';
    answer += res;
}

for (let i = 1; i <= Number(n); i++) solution(input.splice(0, 4));
console.log(answer);