const [_, input] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const numbers = input.split(' ').map(Number).reverse();
const preqMap = new Map();
for (let i of numbers) preqMap.set(i, preqMap.get(i) + 1 || 1);

const stack = [];
let answer = [];

for (let i of numbers) {
    while(preqMap.get(stack.at(-1)) <= preqMap.get(i)) {
        stack.pop();
    }

    stack.at(-1) ? answer.push(stack.at(-1)) : answer.push(-1);
    stack.push(i);
}

console.log(answer.reverse().join(' '))