const [n, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const [, l] = n.split(' ').map(Number);

const myMap = new Map();
for (let i of input) i.length >= l ? myMap.set(i, myMap.get(i) + 1 || 1) : null;

const answer = [...myMap].sort(([textA, countA], [textB, countB]) => {
    if (countA !== countB) return countB - countA;
    if (textA.length !== textB.length) return textB.length - textA.length;
    return textA.localeCompare(textB);
}).map(([v, c]) => v).join('\n');

console.log(answer);