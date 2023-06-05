const [m, ans, n, req] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const mySet = new Set();
const ansArr = ans.split(' ');
const reqArr = req.split(' ');
for (let i of ansArr) mySet.add(i);
let answer = ''
for (let i of reqArr) mySet.has(i) ? answer += '1\n' : answer += '0\n';

console.log(answer);