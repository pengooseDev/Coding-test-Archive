const [_, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n').map(Number);

const l = [0, 0], r = [0, 0];

for (let i of input) {
    if (i <= l[0]) continue;

    l[0] = i;
    l[1]++;
}

for (let i of input.reverse()) {
    if (i <= r[0]) continue;

    r[0] = i;
    r[1]++;
}

const answer = l[1] + '\n' + r[1];

console.log(answer);