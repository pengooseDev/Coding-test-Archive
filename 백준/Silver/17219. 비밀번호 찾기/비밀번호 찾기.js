const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const splitArr = input.split('\n');
const [n, m] = splitArr.shift().split(' ').map((v) => Number(v));
const siteArr = splitArr.splice(0, n);
const myMap = new Map();

for (let i of siteArr) {
    const [site, pw] = i.split(' ');
    myMap.set(site, pw);
}
const res = splitArr.map((v) => myMap.get(v))
for (let i of res) console.log(i);
