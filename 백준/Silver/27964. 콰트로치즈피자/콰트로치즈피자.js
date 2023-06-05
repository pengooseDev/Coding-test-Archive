const [_, input] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const cheeses = input.split(' '), mySet = new Set();
for (let i of cheeses) if (i.endsWith('Cheese')) mySet.add(i);
mySet.size > 3 ? console.log('yummy') : console.log('sad');