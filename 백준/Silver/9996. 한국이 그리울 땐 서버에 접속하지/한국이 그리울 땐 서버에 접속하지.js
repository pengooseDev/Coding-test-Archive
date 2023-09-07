const [_, pattern, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const regexPattern = '^' + pattern.replace("*", ".*") + '$';
console.log(input.map(v => new RegExp(regexPattern).test(v) ? "DA" : "NE").join('\n'));
