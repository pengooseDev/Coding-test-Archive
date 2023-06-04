const input = parseInt(require("fs").readFileSync("/dev/stdin").toString().trim());
let cache = [0n, 1n];
const mod = 1000000007n;
let i = 2;

while (i <= input) {
    cache[i] = (cache[i - 1] + cache[i - 2]) % mod;
    i++;
}

console.log(cache[input].toString());