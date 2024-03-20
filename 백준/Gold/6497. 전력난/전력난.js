const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let index = 0;

while (index < input.length) {
  const [m, n] = input[index++].split(' ').map(Number);
  if (m === 0 && n === 0) break;

  const parent = Array.from({ length: m }, (_, i) => i);
  const edges = [];
  let acc = 0;

  for (let i = 0; i < n; i++) {
    const [x, y, z] = input[index++].split(' ').map(Number);
    edges.push([z, x, y]);
    acc += z;
  }

  edges.sort((a, b) => a[0] - b[0]);

  const find = (x) => (x === parent[x] ? x : (parent[x] = find(parent[x])));
  
  const union = (a, b) => {
    a = find(a);
    b = find(b);
    if (a !== b) parent[b] = a;
  };

  let answer = 0;

  for (const [c, a, b] of edges) {
    if (find(a) !== find(b)) {
      union(a, b);
      answer += c;
    }
  }

  console.log(acc - answer);
}
