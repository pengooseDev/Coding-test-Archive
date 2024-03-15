const [N, ...arr] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const planets = arr.map((line, i) => ({ i, q: line.split(' ').map(Number) }));

const parent = Array.from({ length: N }, (_, i) => i);
const find = (x) => (x === parent[x] ? x : (parent[x] = find(parent[x])));
const union = (a, b) => {
  const rootA = find(a);
  const rootB = find(b);

  if (rootA !== rootB) parent[rootB] = rootA;
};

const edges = [];

for (let i = 0; i < 3; i++) {
  planets.sort((a, b) => a.q[i] - b.q[i]);

  for (let j = 0; j < N - 1; j++) {
    const cost = Math.abs(planets[j].q[i] - planets[j + 1].q[i]);

    edges.push([planets[j].i, planets[j + 1].i, cost]);
  }
}

edges.sort((a, b) => a[2] - b[2]);

let answer = 0;
edges.forEach(([a, b, cost]) => {
  if (find(a) !== find(b)) {
    union(a, b);
    answer += cost;
  }
});

console.log(answer);