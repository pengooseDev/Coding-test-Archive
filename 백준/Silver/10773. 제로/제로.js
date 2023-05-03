const [_, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const nums = input.map(Number);

const stack = [];

for (let i of nums) {
    if (i) stack.push(i);
    if (!i) stack.pop();
}

let res = 0;
if (!!stack[0]) res = stack.reduce((acc, curr) => acc + curr);
console.log(res);