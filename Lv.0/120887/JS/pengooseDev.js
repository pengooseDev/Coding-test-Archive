function solution(i, j, k) {
  let answer = 0;
  const regex = new RegExp(k, 'g');
  const myArr = new Array(j - i + 1)
    .fill('')
    .map((value, index) => String(index + i));
  for (let i of myArr) {
    const res = i.match(regex);
    if (res) answer += res.length;
  }

  return answer;
}
