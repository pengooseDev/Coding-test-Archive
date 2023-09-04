const q = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n').map((v) => v.split('').reverse().join(''));
q.pop();
console.log(q.join('\n'));