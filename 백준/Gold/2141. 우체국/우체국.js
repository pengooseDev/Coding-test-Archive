const [N, ...A] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const arr = A.map(v => v.split(' ').map(Number)).sort((a, b) => a[0] - b[0]);
let sum = 0;
let acc = 0;

for (let i = 0; i < N; i++) {
  acc += arr[i][1];
  sum += arr[i][0] * arr[i][1];
}

let answer = 0;
let t = 0;

for (let i = 0; i < N; i++) {
  t += arr[i][1];
  if (t >= Math.ceil(acc / 2)) {
    answer = arr[i][0];

    break;
  }
}

console.log(answer);