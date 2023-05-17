const [text, , ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const leftStack = [...text];
const rightStack = [];

for (let i of input) {
    if (i === "L" && leftStack.length !== 0) rightStack.push(leftStack.pop());
    if (i === "D" && rightStack.length !== 0) leftStack.push(rightStack.pop());
    if (i === "B" && leftStack.length !== 0) leftStack.pop();
    if (i.length > 2) {
        const [, value] = i.split(' ');
        leftStack.push(value);
    }
}

console.log(leftStack.join('') + rightStack.reverse().join(''));