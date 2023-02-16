const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const targetArr = input.split('\n');
const [n, _] = targetArr.shift().split(' ').map((v) => Number(v));
const collection = targetArr.splice(0, n);
const myMap = new Map();

for (let [i, v] of collection.entries()) {
    myMap.set(v, i + 1);
    myMap.set(String(i + 1), v);
};

const answer = targetArr.map((v, i) => myMap.get(v));
for (let i of answer) console.log(i)
