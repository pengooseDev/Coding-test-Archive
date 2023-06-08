let input = require("fs").readFileSync("/dev/stdin").toString().trim();
let answer = '';
while (input.length !== 0) {
    answer += `${input.substring(0, 10)}\n`;
    input = input.substring(10);
}

console.log(answer);

