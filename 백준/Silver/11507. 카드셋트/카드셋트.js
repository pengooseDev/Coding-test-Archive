const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    const string = input.trim();

    if (!string || string.length === 0) {
        console.log('13 13 13 13');
    } else {
        const inputArray = [];
        for (let i = 0; i < string.length; i += 3) inputArray.push(string.slice(i, i + 3));

        const myMap = new Map();
        for (let i of ['P', 'K', 'H', "T"]) myMap.set(i, new Array(15).fill(false));
        let duplicated = false;

        search: for (let i of inputArray) {
            const [type, num] = [i[0], Number(i.slice(1, 3))];
            if (myMap.get(type)[num]) {
                duplicated = true;
                break search;
            }

            const newArr = myMap.get(type);
            newArr[num] = true;
            myMap.set(type, newArr);
        }

        if (duplicated) {
            console.log('GRESKA');
        } else {
            const answer = [...myMap].map(([_, arr]) => arr.slice(1).filter((v) => !v).length - 1).join(' ');
            console.log(answer);
        }
    }

    rl.close();
});