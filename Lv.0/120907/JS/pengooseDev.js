function solution(quiz) {
  const answer = [];
  const PS = [];
  for (let i of quiz) PS.push(i.split(' = '));
  PS.forEach((v) => {
    const [pro, sol] = v;
    eval(pro) === Number(sol) ? answer.push('O') : answer.push('X');
  });

  return answer;
}
