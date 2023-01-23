function solution(board) {
  let answer = 0;
  const bombMap = new Map();

  for (let i = 0; i <= board.length - 1; i++)
    for (let j = 0; j <= board[i].length - 1; j++)
      if (board[i][j] === 1) bombMap.set([i, j], '');

  bombMap.forEach((_, key) => {
    const [i, j] = key;
    if (board[i - 1])
      j
        ? board[i - 1].splice(j - 1, 3, 'x', 'x', 'x')
        : board[i - 1].splice(0, 2, 'x', 'x');
    if (board[i])
      j
        ? board[i].splice(j - 1, 3, 'x', 'x', 'x')
        : board[i].splice(0, 2, 'x', 'x');
    if (board[i + 1])
      j
        ? board[i + 1].splice(j - 1, 3, 'x', 'x', 'x')
        : board[i + 1].splice(0, 2, 'x', 'x');
  });

  for (let i of board) for (let j of i) if (j !== 'x') answer += 1;

  return answer;
}
