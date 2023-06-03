const input = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
let toggle = true;


class Deque {
    #data = [];
    #front = 0;
    #rear = 0;

    constructor() {
        this.#data = [];
        this.#front = 0;
        this.#rear = 0;
    }

    pushBack(value) {
        this.#data[this.#rear] = value;
        this.#rear += 1;
    }

    popFront() {
        if (this.#rear !== 0) {
            let item = this.#data[this.#front];
            this.#front += 1;

            return item;
        }
    }

    size() {
        return this.#rear - this.#front;
    }
}

let deque = new Deque();
for (let i = 1; i <= input; i++) deque.pushBack(i);

while (deque.size() > 1) {
    if (toggle) {
        deque.popFront();
        toggle = false;
    } else {
        deque.pushBack(deque.popFront());
        toggle = true;
    }
}

console.log(deque.popFront());

