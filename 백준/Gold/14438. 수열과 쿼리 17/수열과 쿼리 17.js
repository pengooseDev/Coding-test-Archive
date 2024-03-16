const [N, arr, M, ...query] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const input = arr.split(' ').map(Number);
const tree = Array(4 * N).fill(0);
const min = (a, b) => (a < b ? a : b);

const init = (node, start, end) => {
  if (start === end) return (tree[node] = input[start]);

  const mid = Math.floor((start + end) / 2);

  return (tree[node] = min(
    init(node * 2, start, mid),
    init(node * 2 + 1, mid + 1, end)
  ));
};

const update = (node, start, end, index, value) => {
  if (index < start || index > end) return tree[node];
  if (start === end) return (tree[node] = value);

  const mid = Math.floor((start + end) / 2);

  return (tree[node] = min(
    update(node * 2, start, mid, index, value),
    update(node * 2 + 1, mid + 1, end, index, value)
  ));
};

const queryMin = (node, start, end, left, right) => {
  if (left > end || right < start) return Infinity;
  if (left <= start && end <= right) return tree[node];

  const mid = Math.floor((start + end) / 2);

  return min(
    queryMin(node * 2, start, mid, left, right),
    queryMin(node * 2 + 1, mid + 1, end, left, right)
  );
};

init(1, 0, N - 1);

let answer = '';

for (let i = 0; i < M; i++) {
  const [a, b, c] = query[i].split(' ').map(Number);

  a === 1
    ? update(1, 0, N - 1, b - 1, c)
    : (answer += `${queryMin(1, 0, N - 1, b - 1, c - 1)}\n`);
}

console.log(answer);
