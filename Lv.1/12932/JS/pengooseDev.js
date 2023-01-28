function solution(n) {
  const answer = [];
  const arr = String(n).split('');
  for (let _ of new Array(String(n).length)) answer.push(arr.pop());

  return answer.map((v) => Number(v));
}
