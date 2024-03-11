const [input, ...edges] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input.split(' ').map(Number);

const parent = Array(N + 1)
  .fill(0)
  .map((_, i) => i);

const find = (x) => (x === parent[x] ? x : (parent[x] = find(parent[x])));
const union = (a, b) => {
  const rootA = find(a);
  const rootB = find(b);

  if (rootA !== rootB) parent[rootB] = rootA;
};

const sorted = edges
  .map((v) => v.split(' ').map(Number))
  .sort((a, b) => a[2] - b[2]);

let answer = 0;
let lastCost = 0;

sorted.forEach(([a, b, c]) => {
  if (find(a) !== find(b)) {
    union(a, b);
    
    answer += c;
    lastCost = c;
  }
});

console.log(answer - lastCost);
