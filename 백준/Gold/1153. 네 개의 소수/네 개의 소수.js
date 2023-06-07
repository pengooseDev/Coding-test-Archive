const input = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
const MAX = 1000000;

const mySet = new Set();
for (let i = 2; i <= MAX; i++) mySet.add(i);

for (let i = 2; i * i <= MAX; i++) {
    if (mySet.has(i)) {
        for(let j = i * 2; j <= MAX; j += i) {
            mySet.delete(j);
        }
    }
}

if (input < 8) {
    console.log(-1);
} else {
    if (input % 2 === 0) {
        let a = 2, b = input - 4;
        for (let i = 2; i <= b / 2; i++) {
            if (mySet.has(i) && mySet.has(b - i)) {
                console.log(a, a, i, b - i);
                break;
            }
        }
    } else {
        let a = 2, b = 3, c = input - 5;
        for (let i = 2; i <= c / 2; i++) {
            if (mySet.has(i) && mySet.has(c - i)) {
                console.log(a, b, i, c - i);
                break;
            }
        }
    }
}