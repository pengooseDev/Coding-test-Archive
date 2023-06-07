const input = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

let nums = new Array(4000001).fill(true);
nums[0] = nums[1] = false;
let primes = [];

for (let i = 2; i <= 4000000; i++) {
    if (nums[i]) {
        primes.push(i);
        for (let j = i * 2; j <= 4000000; j += i) nums[j] = false;    
    }
}

let s = 0, e = 0, sum = 0, answer = 0;
while (true) {
    if (sum >= input) {
        if (sum === input) answer++;

        sum -= primes[s++];
    } else if (e === primes.length) {
        break;
    } else sum += primes[e++];
}

console.log(answer);
