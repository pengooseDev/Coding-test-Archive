const [_, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const myMap = new Map();
for (let i of input) {
    const [v, amount] = i.split(' ');
    
    myMap.set(v, myMap.get(v) + Number(amount) || Number(amount));
}

const res = [...myMap].filter((v) => v[1] === 5);
res.length !== 0 ? console.log('YES') : console.log('NO');