const [_, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
let answer = 0;
for (let i of input) {
    let checker = true;
    const mySet = new Set();

    let prev;
    i.split('').forEach((v) => {
        if (mySet.has(v) && prev !== v) checker = false;
        mySet.add(v);
        prev = v;
    });

    if (checker) answer++;
}

console.log(answer);