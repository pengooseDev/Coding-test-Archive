const [_, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const arr = input.map((v) => v.split(' ').map(Number));

arr.sort((a, b) => b[1] - a[1]);

let time = Infinity;
for (let i = 0; i < arr.length; i++) {
    time = Math.min(time, arr[i][1]) - arr[i][0];
    if(time < 0) {
        console.log(-1);
        return;
    }
}

console.log(time);