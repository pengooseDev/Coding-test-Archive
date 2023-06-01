const [_, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const arr = input.map((v) => v.split(' ').map(Number));

const sortedArr = arr.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];

    return a[1] - b[1];
})

let answer = 1;
let [start, end] = sortedArr.shift();
for (let i of sortedArr) {
    const [currS, currE] = i;
    if (currS < end) continue;
    [start, end] = [currS, currE]
    answer++;
}

console.log(answer);
