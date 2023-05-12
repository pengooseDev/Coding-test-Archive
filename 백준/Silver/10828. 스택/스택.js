const [_, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

class Stack {
    #stack;
    constructor(){
        this.#stack = [];
    }

    push(x) {
        this.#stack.push(x);
    }

    pop() {
        if(this.isEmpty()) return -1;
        const popNumber = this.#stack.pop();

        return popNumber;
    }

    size() {
        return this.#stack.length;
    }

    isEmpty() {
        return !this.#stack.length;
    }

    empty() {
        return !this.#stack.length ? 1 : 0;
    }

    top() {
        if(this.isEmpty()) return -1;

        return this.#stack[this.#stack.length - 1];
    }

    getStack() {
        return this.#stack;
    }
}

const stack = new Stack();
const methodMap = {
    "push": (number) => stack.push(number),
    "pop": () => stack.pop(),
    "size": () => stack.size(),
    "empty": () => stack.empty(),
    "top": () => stack.top(),

}
const logicHandler = (text) => {
    const res = text.split(' ');
    if (res[0] === "push") return stack.push(Number(res[1]));
    return methodMap[text]();
}

let answer = '';
for (let i of input) {
    const res = logicHandler(i);
    if (res !== undefined) answer += `${res}\n`
};

console.log(answer)
