function solution(array) {
  let answer = 0;
  const res = array.map((v) => String(v)).map((v) => v.match(/7/g));
  for (let i of res) if (i) answer += i.length;
  return answer;
}
