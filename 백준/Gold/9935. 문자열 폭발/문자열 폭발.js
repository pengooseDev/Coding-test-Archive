let [text, bomb] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const stack = [];

for (let i of text) {
    stack.push(i);
    if (stack.slice(stack.length - bomb.length).join('') === bomb) for (let i = 1; i <= bomb.length; i++) stack.pop();
}


stack.length ? console.log(stack.join('')) : console.log('FRULA');