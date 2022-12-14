function solution(k, score) {
  let scoreBoard = [];
  const answer = [];

  for (i of score) {
    scoreBoard.push(i);
    scoreBoard.sort((a, b) => b - a);
    scoreBoard = scoreBoard.slice(0, k);
    answer.push(scoreBoard[scoreBoard.length - 1]);
  }

  return answer;
}
