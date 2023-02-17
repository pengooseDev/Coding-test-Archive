const [m, n] = require("fs").readFileSync("/dev/stdin").toString().trim().split(' ').map((v) => Number(v));

const mySet = new Set();
for (let i = 2; i <= n; i++) mySet.add(i);

for (let i = 2; i <= parseInt(Math.sqrt(n)); i++) {
    if (mySet.has(i)) {
        for(let j = i * 2; j <= n; j += i) {
            mySet.delete(j);
        }
    }
}

const res = [...mySet].filter((v) => Number(m) <= v);
for (let i of res) console.log(i);