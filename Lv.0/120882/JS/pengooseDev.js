function solution(score) {
  const answer = [];
  const totalScore = score.map((v) => v[0] + v[1]);
  const rankScore = [...totalScore];
  rankScore.sort((a, b) => b - a);
  for (let i of totalScore) answer.push(rankScore.indexOf(i) + 1);

  return answer;
}
