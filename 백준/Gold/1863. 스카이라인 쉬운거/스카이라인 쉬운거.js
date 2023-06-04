const [_, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const stack = [0];
let answer = 0;

for (let i of input) {
    const [x, y] = i.split(' ').map(Number);

    if (stack.at(-1) < y) {
        answer++;
        stack.push(y);
    }

    if (stack.at(-1) > y) {
        if (stack.indexOf(y) === -1 && y !== 0) {
            answer++;
        }

        while(stack.at(-1) >= y) {
            stack.pop();
        }

        stack.push(y);
    }
}

console.log(answer);

/*
currHeight보다 높으면 + 1 / set추가 / currHeight 갱신.
이전보다 낮아지면 갱신 / set에 없으면 + 1 / 그 이상의 set들 전부 삭제.
*/ 
