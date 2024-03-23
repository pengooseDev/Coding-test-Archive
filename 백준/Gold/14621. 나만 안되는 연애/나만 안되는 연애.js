const [C, U, ...arr] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
const [n, m] = C.split(' ').map(Number);
const G = U.split(' ');

const parent = Array.from({ length: n + 1 }, (_, i) => i);
const edges = [];

for (let i = 0; i < m; i++) {
  let [u, v, d] = arr[i].split(' ').map(Number);
  if (G[u - 1] !== G[v - 1]) {
    edges.push([d, u, v]);
  }
}

edges.sort((a, b) => a[0] - b[0]);

const find = (x) => (x === parent[x] ? x : (parent[x] = find(parent[x])));
const union = (a, b) => {
  a = find(a);
  b = find(b);

  if (a !== b) parent[b] = a;
};

let answer = 0;
let selectedEdges = 0;

for (let i = 0; i < edges.length; i++) {
  const [c, a, b] = edges[i];
  if (find(a) !== find(b)) {
    union(a, b);
    answer += c;
    selectedEdges++;
  }
}

selectedEdges < n - 1 ? console.log(-1) : console.log(answer);
