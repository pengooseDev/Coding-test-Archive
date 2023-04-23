const [x, y] = require("fs").readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);
x * 100 < y ? console.log('No') : console.log('Yes')