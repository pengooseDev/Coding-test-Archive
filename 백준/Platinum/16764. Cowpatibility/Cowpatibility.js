const [n, ...splitArr] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const getSubsets = (arr) => {
    const subsets = [];
    const recur = (s, subArr) => {
        subsets.push([...subArr]);
        for (let i = s; i < arr.length; i++) {
            subArr.push(arr[i]);
            recur(i + 1, subArr);
            subArr.pop();
        }
    }

    recur(0, []);
    return subsets.slice(1);
}

let res = 0;
const myMap = new Map();

splitArr.forEach((v) => {
    const flavors = v.split(' ').map(Number).sort((a, b) => a - b);
    const subsets = getSubsets(flavors);

    subsets.forEach((v) => {
        const key = String(v);
        const count = myMap.get(key) || 0;
        res += (v.length % 2 ? 1 : -1) * count;
        myMap.set(key, count + 1);
    });
});

const totalPairs = n * (n - 1) / 2;
const incompatiblePairs = totalPairs - res;
console.log(incompatiblePairs);
