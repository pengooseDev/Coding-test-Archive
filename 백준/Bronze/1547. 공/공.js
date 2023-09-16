const [_, ...m] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
let p = 1;
m.forEach(i => {let[x, y]=i.split(' '); p=x==p?y:y==p?x:p})
console.log(p);
