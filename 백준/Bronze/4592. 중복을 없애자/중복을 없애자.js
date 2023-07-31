const [...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
input.pop();

let answer = '';

for (let i of input) {
    const [_, ...nums] = i.split(' ').map(Number);
    const arrs = nums.reduce((acc, curr) => {
        if (acc[acc.length - 1] === curr) return [...acc];

        return [...acc, curr];
    }, [])

    answer += `${[...arrs].join(' ')} $\n`
}

console.log(answer);