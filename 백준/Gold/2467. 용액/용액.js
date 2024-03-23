const [N, A] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const arr = A.split(' ').map(Number);

let q = 0;
let w = N - 1;
let answer = Infinity;
let [answer1, answer2] = [0, 0];

Do: while (q < w) {
  const sum = arr[q] + arr[w];

  if (Math.abs(sum) < answer) {
    answer = Math.abs(sum);
    answer1 = arr[q];
    answer2 = arr[w];
  }

  if (sum === 0) break Do;

  sum < 0 ? q++ : w--;
}

console.log(`${answer1} ${answer2}`);
