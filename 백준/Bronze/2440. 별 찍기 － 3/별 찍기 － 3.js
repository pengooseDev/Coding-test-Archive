const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let answer = '';
for(let i = Number(input); i > 0; i--){
    answer += `${'*'.repeat(i)}\n`;
}

console.log(answer);