function solution(array, n) {
  let answer = 0;
  for (let i of array) i === n ? (answer += 1) : null;
  return answer;
}
