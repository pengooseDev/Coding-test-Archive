const [, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
class Stack {
    #stack;
    constructor () {
        this.#stack = [];
    }

    getLastElement () {
        return [...this.#stack].pop();
    }

    isEmpty () {
        return !this.#stack.length;
    }

    push (newElement) {
        this.#stack.push(newElement)
    }

    pop () {
        this.#stack.pop();
    }

    getElems () {
        return this.#stack;
    }
}

const answer = [];
const start = '(';
const end = ')';

for (let round of input) {
    const stack = new Stack();
    round.split('').forEach((v) => {
        const lastElement = stack.getLastElement();
        if (v === start) stack.push(start);
        if (v === end && lastElement === start) stack.pop();
        if (v === end && lastElement !== start) stack.push(end);
    })

    answer.push(stack.isEmpty() ? 'YES' : 'NO');
}


console.log(answer.join('\n'));