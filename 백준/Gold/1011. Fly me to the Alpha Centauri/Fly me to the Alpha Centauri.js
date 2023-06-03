const [_, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
let answer = '';

for (let i of input) {
    const [x, y] = i.split(' ').map(Number);
    let d = y - x;
    let sqrtD = Math.floor(Math.sqrt(d));
    let res;

    if (d === sqrtD * sqrtD) {
        res = 2 * sqrtD - 1;
    } else if (d <= sqrtD*sqrtD + sqrtD) {
        res = 2 * sqrtD;
    } else {
        res = 2 * sqrtD + 1;
    }

    answer += `${res}\n`
}

console.log(answer);