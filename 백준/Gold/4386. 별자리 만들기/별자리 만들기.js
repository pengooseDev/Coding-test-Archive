const [N, ...arr] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const parent = Array.from({ length: N + 1 }, (_, i) => i);

const find = (x) => (x === parent[x] ? x : (parent[x] = find(parent[x])));
const union = (a, b) => {
  const rootA = find(a);
  const rootB = find(b);

  if (rootA !== rootB) parent[rootB] = rootA;
};

const edges = [];

for (let i = 0; i < N; i++) {
  const [x, y] = arr[i].split(' ').map(Number);

  for (let j = i + 1; j < N; j++) {
    const [a, b] = arr[j].split(' ').map(Number);
    const cost = Math.sqrt((x - a) ** 2 + (y - b) ** 2);
    edges.push([i + 1, j + 1, cost]);
  }
}

edges.sort((a, b) => a[2] - b[2]);

let answer = 0;

for (let i = 0; i < edges.length; i++) {
  const [a, b, cost] = edges[i];

  if (find(a) !== find(b)) {
    union(a, b);
    answer += cost;
  }
}

console.log(answer.toFixed(2));