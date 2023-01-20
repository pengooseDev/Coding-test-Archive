function solution(array, height) {
  let answer = 0;
  for (let i of array) if (height < i) answer++;
  return answer;
}
