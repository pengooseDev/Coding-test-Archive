const input = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

let answer = [];
for(let i = 1; i <= input; i++) {
    let res ='';
    res += ' '.repeat(input - i);
    res += '*'.repeat(2 * i - 1);
    answer.push(`${res}\n`);
}

const rR = [...answer].reverse();
rR.shift();

const arr = [...answer, ...rR]
console.log(arr.join(''));
