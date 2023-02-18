const [n, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const splitArr = input[0].split(' ').map((v) => Number(v)).sort((a, b) => a - b);
let answer = 0;

splitArr.reduce((acc, curr) => {
    acc += curr;
    answer += acc;
    return acc;
});

console.log(answer + splitArr[0])
