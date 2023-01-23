function solution(s) {
  let answer = 0;
  s.split(' ').reduce((prev, curr) => {
    if (curr === 'Z') answer -= Number(prev);
    if (curr !== 'Z') answer += Number(curr);

    return curr;
  }, s.split(' ')[0]);
  return answer;
}
