const [[V,], ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n').map((v) => v.split(' '));

let res = 0;
const parent = Array.from({ length: V }, (_, i) => i);

const find = (x) => {
    if (x === parent[x]) return x;

    return (parent[x] = find(parent[x]));
};

const union = (a, b) => {
    a = find(a);
    b = find(b);

    a !== b && (parent[b] = a);
};

arr.sort((a, b) => a[2] - b[2]).map(([a, b, c]) => {
    if (find(a - 1) !== find(b - 1)) {
        union(a - 1, b - 1);
        res += Number(c);
    }
});

console.log(res);
