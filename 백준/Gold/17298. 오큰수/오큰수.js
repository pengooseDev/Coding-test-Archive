const [_, input] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const numbers = input.split(' ').map(Number).reverse();
let answer = [];
const stack = [];

for (let i of numbers) {
    while(stack.at(-1) <= i) {
        stack.pop();
    }

    stack.at(-1) ? answer.push(stack.at(-1)) : answer.push(-1);
    stack.push(i);
}

console.log(answer.reverse().join(' '));