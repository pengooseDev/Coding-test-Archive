const [N, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const parent = Array.from({ length: N }, (_, i) => i);
const find = (x) => (x === parent[x] ? x : (parent[x] = find(parent[x])));
const union = (a, b) => {
  a = find(a);
  b = find(b);

  a !== b && (parent[b] = a);
};

const edges = [];
let result = 0;
for (let i = 0; i < N; i++) arr[i] = arr[i].split(' ').map(Number);
for (let i = 0; i < N; i++)
  for (let j = i + 1; j < N; j++) edges.push([i, j, arr[i][j]]);

edges.sort((a, b) => a[2] - b[2]);
for (let i = 0; i < edges.length; i++) {
  const [a, b, cost] = edges[i];

  if (find(a) !== find(b)) {
    union(a, b);
    result += cost;
  }
}

console.log(result);
