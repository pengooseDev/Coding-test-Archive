function solution(hp) {
  const powers = [5, 3, 1];
  let answer = 0;

  for (let i of powers) {
    answer += parseInt(hp / i);
    hp = hp % i;
  }

  return answer;
}
