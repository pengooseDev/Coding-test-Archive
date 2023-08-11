const [_, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

let answer = '';
for (let i of input) {
    const arr = i.split(' ').map(Number);
    answer += `${arr.sort((a, b) => b - a)[2]}\n`;    
}

console.log(answer);