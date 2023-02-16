const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const myMap = new Map();
for (let i = 0; i <= input.length - 1; i++) for (let j = i + 1; j <= input.length; j++) myMap.set(input.slice(i, j), 1);
console.log(myMap.size);