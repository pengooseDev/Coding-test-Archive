function solution(n) {
  const UNIT = 7;
  let answer = 1;

  while (UNIT * answer < n) {
    answer += 1;
  }

  return answer;
}
