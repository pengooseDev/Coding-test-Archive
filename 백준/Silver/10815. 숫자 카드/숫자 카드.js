const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const splitArr = input.split('\n').filter((v, i) => i % 2 !== 0);
const myMap = new Map();
splitArr[0].split(' ').forEach((v) => myMap.set(v, 1));
const answer = splitArr[1].split(' ').map((v) => myMap.has(v) ? 1 : 0);
console.log(answer. join(' '));

