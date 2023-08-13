const [q,w,e,r,t] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
console.log(Math.min(q,w,e)+Math.min(r,t)-50);