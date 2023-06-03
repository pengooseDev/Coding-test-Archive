const [_, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const arr = [];

while (input.length !== 0) {
    const temp = [];
    temp.push(input.shift());
    input.shift();
    temp.push(JSON.parse(input.shift()));    
    arr.push(temp);
}

class Deque {
    #data;
    #front;
    #rear;
    #result;
    #reverse;

    constructor (indexArr) {
        this.#data = indexArr;
        this.#front = 0;
        this.#rear = indexArr.length;
        this.#reverse = false;
    }

    reverse() {
        this.#reverse = !this.#reverse;
    }

    remove() {
        if (this.#rear - this.#front === 0) return this.#result = 'error';

        this.#reverse ? this.#rear-- : this.#front++;
    }

    getResult() {
        if (this.#result === 'error') return 'error';

        return this.#reverse ? this.#data.slice(this.#front, this.#rear).reverse() : this.#data.slice(this.#front, this.#rear);
    }
}

let answer = '';

for (let i of arr) {
    const [command, indexArr] = i;
    const deque = new Deque(indexArr);
    for (let i of command) {
        if (i === 'R') deque.reverse();
        if (i === 'D') deque.remove();
    }

    deque.getResult() === 'error' ? answer += 'error\n' : answer += `[${deque.getResult().join(',')}]\n`;
}

console.log(answer);