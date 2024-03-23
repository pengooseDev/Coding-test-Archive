const [N, arr] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [_, S] = N.split(' ').map(Number);
const A = arr.split(' ').map(Number);

let q = 0;
let w = 0;
let sum = 0;
let answer = Infinity;

while (q <= w && w <= A.length) {
  if (sum < S) {
    if (w === A.length) break;
    sum += A[w++];
  } else {
    answer = Math.min(answer, w - q);
    sum -= A[q++];
  }
}

console.log(answer === Infinity ? 0 : answer);