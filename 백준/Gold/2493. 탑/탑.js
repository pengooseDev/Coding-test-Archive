const [_, input] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const towers = input.split(' ').map(Number);
const stack = [];
let answer = '';

for (let i = 0; i <= towers.length - 1; i++) {
    while (stack?.at(-1)?.tower < towers[i]) {
        stack.pop();
    }

    stack.at(-1) ? answer += `${stack.at(-1).index} ` : answer += '0 ';
    
    stack.push({
        index: i + 1,
        tower: towers[i],
    });
}

console.log(answer.trim());