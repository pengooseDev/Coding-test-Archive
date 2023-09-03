const [_, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
console.log(input.map((v) => v.toLowerCase()).join('\n'));