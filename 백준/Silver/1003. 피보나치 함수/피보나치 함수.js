const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const myArr = input.split('\n');
myArr.splice(0, 1);

const dpx = [1, 0, 1];
const dpy = [0, 1, 1];
myArr.map((v) => Number(v)).forEach((v) => {
    for (let i = 3; i <= v; i++) {
        dpx[i] = dpx[i - 1] + dpx[i - 2];
        dpy[i] = dpy[i - 1] + dpy[i - 2];
    }

    console.log(`${dpx[v]} ${dpy[v]}`)
})