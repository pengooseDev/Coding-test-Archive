const [N, A] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const arr = A.split(' ')
  .map(Number)
  .sort((a, b) => a - b);

let answer = Infinity;
let [answer1, answer2, answer3] = [0, 0, 0];

for (let i = 0; i < N - 2; i++) {
  let q = i + 1;
  let w = N - 1;

  Do: while (q < w) {
    const sum = arr[i] + arr[q] + arr[w];

    if (Math.abs(sum) < answer) {
      answer = Math.abs(sum);
      answer1 = arr[i];
      answer2 = arr[q];
      answer3 = arr[w];
    }

    if (sum === 0) break Do;

    sum < 0 ? q++ : w--;
  }
}

console.log(`${answer1} ${answer2} ${answer3}`);
