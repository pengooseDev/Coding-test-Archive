const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const splitArr = input.split('\n');
splitArr.shift();
const myMap = new Map();

splitArr.forEach((v) => {
    const [name, check] = v.split(' ');
    myMap.set(name, check);
})

let answer = [];
myMap.forEach((value, key) => {
    if (value === 'enter') answer.push(key);
});

answer.sort().reverse();
console.log(answer.join('\n'));

