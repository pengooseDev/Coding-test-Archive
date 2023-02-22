const [n, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
let count = 0;
let column = new Array(input[0].length).fill('');
input.forEach((value) => {
    value.split('').forEach((v, i) => column[i] += v);
})

const solution = (arr) => {
    const myMap = new Map();
    for (let i of arr) myMap.set(i, 1);
    return arr.length !== myMap.size;
}

while (1) {
    if (column[0].length === 1) break;
    column = column.map((v) => v.substring(1));
    const duplicated = solution(column);
    if (duplicated) break;
    count++
}


console.log(count)