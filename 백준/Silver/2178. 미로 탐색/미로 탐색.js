const [size, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const [N, M] = size.split(' ').map(Number);

const map = input.map((v) => v.split('').map(Number));
const visited = new Array(N).fill('').map((v) => new Array(M).fill(false));

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

const bfs = (x, y) => {
    const queue = [[x, y]];
    visited[x][y] = true;

    while (queue.length !== 0){
        const [x, y] = queue.shift();
        
        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (0 <= nx && 0 <= ny && nx < N && ny < M) {
                if(!visited[nx][ny] && map[nx][ny] === 1) {
                    map[nx][ny] = map[x][y] + 1;
                    visited[nx][ny] = true;
                    queue.push([nx, ny]);
                }
            }
        }
    }

    return map[N - 1][M - 1];
}

console.log(bfs(0, 0));