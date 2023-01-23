function solution(rsp) {
  let answer = '';
  rsp.split('').forEach((v) => (answer += winMap[v]));
  return answer;
}

const winMap = {
  0: '5',
  2: '0',
  5: '2',
};
