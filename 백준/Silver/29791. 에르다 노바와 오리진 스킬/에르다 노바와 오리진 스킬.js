const [q, A, B] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const [N, M] = q.split(' ').map(Number);
const aCools = A.split(' ').map(Number).sort((a, b) => a - b);
const bCools = B.split(' ').map(Number).sort((a, b) => a - b);

const cooltime = { A: 100, B: 360 };
const immunityTime = { A: 90, B: 90 };

let ac = 0, bc = 0;
let aCool = 0, bCool = 0;
let aIm = 0, bIm = 0;

for (let time of aCools) {
    if (time >= aCool && time >= aIm) {
        ac++;
        aCool = time + cooltime.A;
        aIm = time + immunityTime.A;
    }
}

for (let time of bCools) {
    if (time >= bCool && time >= bIm) {
        bc++;
        bCool = time + cooltime.B;
        bIm = time + immunityTime.B;
    }
}

console.log(ac, bc);
