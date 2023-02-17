const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const sol = (num) => {
    const a = (num % 4) === 0;
    const b1 = (num % 100) !== 0;
    const b2 = (num % 400) === 0;

    if (a && b1) return 1;
    if (a && b2) return 1;
    return 0;
}

console.log(sol(Number(input)))