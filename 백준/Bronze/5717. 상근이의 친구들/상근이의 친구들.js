const a = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n').map((v) => v.split(' ').map(Number).reduce((q,w)=>q+w));
a.pop();
console.log(a.join('\n'));