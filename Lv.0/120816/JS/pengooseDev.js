function solution(slice, n) {
  const UNIT = slice;
  let answer = 1;

  while (UNIT * answer < n) {
    answer++;
  }

  return answer;
}
