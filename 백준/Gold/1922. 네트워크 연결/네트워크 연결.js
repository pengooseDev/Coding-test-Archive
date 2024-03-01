const [N, _, ...A] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const parent = Array.from({ length: N }, (_, i) => i);
const find = (x) => (x === parent[x]) ? x : (parent[x] = find(parent[x]));

const union = (x, y) => {
    x = find(x);
    y = find(y);

    x !== y && (parent[y] = x);
};

const result = A.map((v) => v.split(' ').map(Number)).sort((a, b) => a[2] - b[2]).reduce((acc, [a, b, c]) => {
    if (find(a) !== find(b)) {
        union(a, b);
        acc += c;
    }

    return acc;
}, 0);

console.log(result);
