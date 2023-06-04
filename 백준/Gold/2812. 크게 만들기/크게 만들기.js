const [input, text] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const [_, K] = input.split(' ').map(Number);
const stack = [];
let count = 0;

for (let i of text) {
    const curr = Number(i);
    while (stack.length && curr > stack.at(-1) && count < K) {
        stack.pop();
        count++;
    }

    stack.push(curr);
}

while (count < K) {
    stack.pop();
    count++;
}

console.log(stack.join(''));