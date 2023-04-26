const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('');

const sol = (string) => {
    let res = true;
    while (string.length > 1) {
        const isSame = string.pop() === string.shift();

        if (!isSame) res = false;
    }

    return Number(res);
}

console.log(sol(input));