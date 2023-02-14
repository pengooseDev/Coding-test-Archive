const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const [numStr, targetStr] = [input.split('\n')[1], input.split('\n')[3]];
const myMap = new Map();
numStr.split(' ').map((v) => myMap.set(v, myMap.get(v) + 1 || 1));
const answer = targetStr.split(' ').map((v) => myMap.get(v) || 0);
console.log(...answer);
