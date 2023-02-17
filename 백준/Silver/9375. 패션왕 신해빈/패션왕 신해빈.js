const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const splitArr = input.split('\n');
splitArr.shift();
const newArr = [];
while(splitArr.length !== 0) {
    const spliceIndex = Number(splitArr.shift());
    newArr.push(splitArr.splice(0, spliceIndex));
}

const res = newArr.map((clothes) => {
    const myMap = new Map();
    for (let cloth of clothes) {
        const [v, type] = cloth.split(' ');
        myMap.set(type, myMap.get(type) + 1 || 1);
    };

    return myMap;
})

res.forEach((v) => {
    const myArr = [...v];
    if (myArr.length === 1) return console.log(myArr[0][1]);
    const types = myArr.map((v) => v[1] + 1);
    if(!types.length) return console.log(0);
    const res = types.reduce((acc, curr) => acc *= curr);
    console.log(res - 1);
})
