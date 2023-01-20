function solution(num) {
  const answer = new Array(2).fill(0);
  for (let i of num) i % 2 === 0 ? answer[0]++ : answer[1]++;
  return answer;
}
