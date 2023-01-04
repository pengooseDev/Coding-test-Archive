function solution(n) {
  const UNIT = 6;
  let answer = 1;

  while ((UNIT * answer) % n !== 0) {
    answer++;
  }

  return answer;
}
