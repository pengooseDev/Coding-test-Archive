const [n, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const arrs = input.map(Number)
let number = 0;
const stack = [];
let answer = '';

for (let i of arrs) {
    while (number < i) {
        number++;
        answer += '+\n';
        stack.push(number);
    }

    if (stack.at(-1) === i) {
        answer += '-\n';
        stack.pop();
        continue;
    }
    
    answer = 'NO';
    break;
}

console.log(answer);