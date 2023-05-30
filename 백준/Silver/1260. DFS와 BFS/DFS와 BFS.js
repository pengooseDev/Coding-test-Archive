const [t, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const [n, s, start] = t.split(' ').map(Number);
const myMap = new Map();

/* Create graph */
input.forEach((v) => {
    const [key, value] = v.split(' ').map((v) => Number(v));
    myMap.get(key) ? myMap.set(key, [...myMap.get(key), value]) : myMap.set(key, [value]);
    myMap.get(value) ? myMap.set(value, [...myMap.get(value), key]) : myMap.set(value, [key]);
});

/* DFS */
const visitedD = new Set();
let answerD = '';

const dfs = (node) => {
    visitedD.add(node);
    answerD += `${node} `;
    const next = myMap.get(node) || [];
    next.sort((a, b) => a - b);

    for (let i = 0; i < next.length; i++) {
        if (!visitedD.has(next[i])) dfs(next[i]);
    }
}

dfs(start);
console.log(answerD);


/* BFS */
const visitedB = new Set();
let answerB = '';

const bfs = (startNode) => {
    const queue = [startNode];
    visitedB.add(startNode);

    while (queue.length) {
        const currNode = queue.shift();
        answerB += `${currNode} `;

        const next = myMap.get(currNode) || [];
        next.sort((a, b) => a - b);

        for (let i = 0; i < next.length; i++) {
            if (!visitedB.has(next[i])) {
                visitedB.add(next[i]);
                queue.push(next[i]);
            }
        }
    }
}

bfs(start);
console.log(answerB);