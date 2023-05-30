const [min, max] = require("fs").readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);
const mySet = new Set();

for (let i = min; i <= max; i++) mySet.add(i);
for (let i = 2; i * i <= max; i++) {
    let pow = i * i;
    let start = min % pow === 0 ? min : min + (pow - (min % pow));

    for (let j = start; j <= max; j += pow) mySet.delete(j);
}

console.log(mySet.size);

/*
제곱수를 찾는다.
제곱수의 배수들을 set에서 삭제한다.
*/
