const [_, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

let answer = 0;
for (let i of input) {
    const stack = [];
    for (let j of i.split('')) {
        if (j === "A") {
            if (stack.at(-1) === "A") {
                stack.pop();
                continue;
            }
            stack.push(j);
        }

        if (j === "B") {
            if (stack.at(-1) === "B") {
                stack.pop();
                continue;
            }
            stack.push(j);
        }

    }

    if(!stack[0]) answer++;
}

console.log(answer);