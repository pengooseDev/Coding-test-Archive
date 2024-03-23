const [, ...arr] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

const parent = Array(arr.length)
  .fill(0)
  .map((_, i) => i);

const find = (x) => (x === parent[x] ? x : (parent[x] = find(parent[x])));
const union = (a, b) => {
  a = find(a);
  b = find(b);

  if (a !== b) parent[b] = a;
};

const ccw = (x1, y1, x2, y2, x3, y3) => {
  let temp = x1 * y2 + x2 * y3 + x3 * y1;
  temp -= y1 * x2 + y2 * x3 + y3 * x1;

  return temp;
};

const intersect = ({ x1, y1, x2, y2, x3, y3, x4, y4 }) => {
  const ab = ccw(x1, y1, x2, y2, x3, y3) * ccw(x1, y1, x2, y2, x4, y4);
  const cd = ccw(x3, y3, x4, y4, x1, y1) * ccw(x3, y3, x4, y4, x2, y2);

  if (ab === 0 && cd === 0) {
    if (x1 > x2) [x1, x2] = [x2, x1];
    if (y1 > y2) [y1, y2] = [y2, y1];
    if (x3 > x4) [x3, x4] = [x4, x3];
    if (y3 > y4) [y3, y4] = [y4, y3];

    return x1 <= x4 && x3 <= x2 && y1 <= y4 && y3 <= y2;
  }

  return ab <= 0 && cd <= 0;
};

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    const [x1, y1, x2, y2] = arr[i];
    const [x3, y3, x4, y4] = arr[j];

    if (intersect({ x1, y1, x2, y2, x3, y3, x4, y4 })) union(i, j);
  }
}

const group = Array(arr.length).fill(0);
for (let i = 0; i < arr.length; i++) group[find(i)]++;

console.log(`${new Set(parent.map(find)).size}\n${Math.max(...group)}`);
