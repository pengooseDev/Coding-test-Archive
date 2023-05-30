const [order, temp] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const [_, size] = order.split(' ').map(Number);
const arr = temp.split(' ').map(Number);
const cache = [];
cache[0] = 0;

for (let i = 1; i <= arr.length; i++) cache[i] = cache[i - 1] + arr[i - 1];

let max = Number.MIN_SAFE_INTEGER;

for (let i = 0; i <= arr.length - size; i++) {
    max = Math.max(max, cache[i + size] - cache[i]);

}

console.log(max);
