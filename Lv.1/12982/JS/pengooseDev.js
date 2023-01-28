function solution(d, budget) {
  let answer = 0;
  const dArr = d.sort((a, b) => a - b);

  for (let i of dArr) {
    if (budget - i < 0) return answer;
    budget -= i;
    answer += 1;
  }

  return answer;
}
