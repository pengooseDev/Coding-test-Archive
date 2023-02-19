const [n, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const splitArr = input.map((v) => v.split(' '));
const myMap = new Map();
myMap.set('ChongChong', 1);

for (let [a, b] of splitArr) {
    if (myMap.has(a) || myMap.has(b)) {
        myMap.set(a, 1);
        myMap.set(b, 1);
    }
}

console.log(myMap.size);