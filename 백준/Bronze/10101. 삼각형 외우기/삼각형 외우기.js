const [a,b,c] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n').map(Number);
console.log(a+b+c!==180?"Error":a==b&&b==c?"Equilateral":a==b||b==c||c==a?"Isosceles":"Scalene");
