const [...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
input.pop();

const checker = (text) => {
    let res = true;
    const stack = [];

    Do: for (let i of text) {
        if (i === '[') {
            stack.push('[') 
            continue
        };

        if (i === ']') {
            if (stack.at(-1) === '[') {
                stack.pop();
                continue;
            }

            res = false;
            break Do;
        }
        
        if (i === '(') {
            stack.push('(');
            continue;
        };

        if (i === ')') {
            if (stack.at(-1) === '(') {
                stack.pop();
                continue;
            }

            res = false;
            break Do;
        }
    }

    return res && stack.length === 0 ? 'yes' : 'no';
}

let answer = '';
for (let i of input) answer += `${checker(i)}\n`

console.log(answer)