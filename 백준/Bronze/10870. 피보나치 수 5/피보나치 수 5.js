const input = parseInt(require("fs").readFileSync("/dev/stdin").toString().trim());
const cache = new Map();

const fibo = (input) => {
    if (input === 0) return 0;
    if (input === 1) return 1;
    if (!cache.has(input)) cache.set(input, fibo(input - 1) + fibo(input - 2));

    return cache.get(input);
}

console.log(fibo(input));