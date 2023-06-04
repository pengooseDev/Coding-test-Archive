const [option, targetStr] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const [N, M] = option.split(' ').map(Number);
const targets = targetStr.split(' ').map(Number);
let arr = new Array(N).fill('').map((_, i) => i + 1);
let answer = 0;

for (let i of targets) {
    const targetIndex = arr.indexOf(i);
    const left = targetIndex;
    const right = arr.length - targetIndex;

    const movement = Math.min(left, right);
    answer += movement;
    arr = arr.slice(targetIndex + 1).concat(arr.slice(0, targetIndex));
}

console.log(answer);
