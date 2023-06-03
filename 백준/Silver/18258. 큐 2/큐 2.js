const [_, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

class Queue {
    #queue;
    #front;
    #rear;

    constructor(){
        this.#queue = [];
        this.#front = 0;
        this.#rear = 0;
    }

    push(value) {
        this.#queue[this.#rear] = value;
        this.#rear += 1;
                
        return value;
    }

    pop() {
        if (this.#rear - this.#front === 0) return -1;
        const returnValue = this.#queue[this.#front];
        this.#front += 1;

        return returnValue;
    }

    size() {
        return this.#rear - this.#front;
    }

    empty() {
        return this.#rear - this.#front === 0 ? 1 : 0;
    }

    front() {
        if(this.#rear - this.#front === 0) return -1;

        return this.#queue[this.#front];
    }

    back() {
        if(this.#rear - this.#front === 0) return -1;

        return this.#queue[this.#rear - 1];
    }

    getQueue() {
        return this.#queue;
    }
}

const queue = new Queue();
let answer = '';

for (let i of input) {
    const [command, value] = i.split(' ');

    if (command === 'push') queue.push(value);
    if (command === 'pop') answer += `${queue.pop()}\n`;
    if (command === 'size') answer += `${queue.size()}\n`;
    if (command === 'empty') answer += `${queue.empty()}\n`;
    if (command === 'front') answer += `${queue.front()}\n`; 
    if (command === 'back') answer += `${queue.back()}\n`;
}

console.log(answer)