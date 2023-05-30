const [s, _, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const cache = {}
for (let i = 97; i <= 122; i++) cache[i] = [0];
for (let i = 1; i <= s.length; i++) for (let j = 97; j <= 122; j++) j === s[i - 1].charCodeAt(0) ? cache[j][i] = cache[j][i - 1] + 1 : cache[j][i] = cache[j][i - 1];

for (let i of input) {
    const [target, ...rest] = i.split(' ');
    const [start, end] = rest.map(Number);
    const arr = cache[target.charCodeAt(0)];
    console.log(arr[end + 1] - arr[start]);
}