const [n, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
for (let i = 0; i <= n - 1; i++) {
    const [num, str] = input[i].split(' ');
    const res = str.split('').map((v) => v.repeat(num)).join('');
    console.log(res);
}
