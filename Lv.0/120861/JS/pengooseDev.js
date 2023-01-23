function solution(keyinput, board) {
  const answer = [0, 0];
  const [xMax, yMax] = [parseInt(board[0] / 2), parseInt(board[1] / 2)];
  console.log(xMax, yMax);

  for (let i of keyinput) {
    console.log(answer);
    if (i[0] === 'l' || i[0] === 'r')
      Math.abs(answer[0] + keyMap[i]) > xMax ? '' : (answer[0] += keyMap[i]);
    if (i[0] === 'u' || i[0] === 'd')
      Math.abs(answer[1] + keyMap[i]) > yMax ? '' : (answer[1] += keyMap[i]);
  }
  console.log(answer);

  return answer;
}

const keyMap = {
  up: 1,
  down: -1,
  left: -1,
  right: 1,
};
