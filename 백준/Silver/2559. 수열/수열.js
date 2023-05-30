const [order, temp] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const [_, size] = order.split(' ').map(Number);
const arr = temp.split(' ').map(Number);

let window = [...arr].splice(0, size).reduce((acc, curr) => acc + curr);
let max = window;

for (let i = size; i <= arr.length - 1; i++) {
    window = window + arr[i] - arr[i - size];
    max = Math.max(max, window);
}

console.log(max)


// const cache = [];
// cache[0] = 0;

// for (let i = 1; i <= arr.length; i++) cache[i] = cache[i - 1] + arr[i - 1];

// let max = Number.MIN_SAFE_INTEGER;

// for (let i = 0; i <= arr.length - size; i++) {
//     max = Math.max(max, cache[i + size] - cache[i]);

// }

// console.log(max);