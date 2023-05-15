const [n, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const enterSplitArr = input.join(' ').split("ENTER").filter((v) => v).map((v) => v.split(' ').filter((v) => v));

let answer = 0;

for (let arr of enterSplitArr) {
    const mySet = new Set();
    for (let i of arr) mySet.add(i);

    answer += mySet.size;
}

console.log(answer);
