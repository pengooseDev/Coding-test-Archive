const [_, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
let stack;
let answer = '';

for (let i = 1; i <= input.length; i++)
{
    const textArr = input[i - 1].split(' ');
    stack = [];
    const l = textArr.length;
    for (let i = 0; i < l; i++) stack.push(textArr.pop());

    answer += `Case #${i}: ${stack.join(' ')}\n`
}

console.log(answer);