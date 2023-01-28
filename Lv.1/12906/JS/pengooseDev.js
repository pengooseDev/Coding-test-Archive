function solution(arr) {
  const answer = [arr[0]];
  arr.reduce((acc, curr) => {
    if (curr === acc) return curr;
    answer.push(curr);
    return curr;
  }, arr[0]);
  return answer;
}
