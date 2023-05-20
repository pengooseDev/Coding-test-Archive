const input = parseInt(require("fs").readFileSync("/dev/stdin").toString().trim());
const cache = new Array(input).fill(-1);

const fibo = (input) => {
    if (input === 0) return 0;
    if (input === 1) return 1;
    if (!cache[input] !== -1) cache[input] = fibo(input - 1) + fibo(input - 2);

    return cache[input];
}

console.log(fibo(input));