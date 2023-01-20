function solution(n) {
  let answer = 0;
  for (let i = 1; i <= parseInt(n / 2); i++) answer += i;

  return answer * 2;
}
