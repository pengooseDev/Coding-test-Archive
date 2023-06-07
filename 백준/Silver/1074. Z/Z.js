let [N, x, y] = require("fs").readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);

const seg = (n, x, y) => {
    if (n === 0) return 0;
    let half = 2 ** (n - 1);
    if (x < half && y < half) return seg(n - 1, x, y);
    if (x < half && y >= half) return half ** 2 + seg(n - 1, x, y - half);
    if (x >= half && y < half) return 2 * (half ** 2) + seg(n - 1, x - half, y);
    return 3 * (half ** 2) + seg(n - 1, x - half, y - half);
}

console.log(seg(N, x, y));
