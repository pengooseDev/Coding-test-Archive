const [N, A, S] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = +N;
let s = +S;
const arr = A.split(' ').map(Number);

for (let i = 0; i < n; i++) {
  let [max, idx] = [0, 0];

  for (let j = i; j < n && j - i <= s; j++) {
    if (max < arr[j]) {
      max = arr[j];
      idx = j;
    }
  }
  for (let j = idx; j > i; j--) [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];

  s -= idx - i;
}

console.log(arr.join(' '));
