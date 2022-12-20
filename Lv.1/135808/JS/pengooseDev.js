function solution(k, m, score) {
  let index = 0;
  let answer = 0;
  const sortedApples = [...score].sort((a, b) => b - a);

  while (m * (index + 1) <= sortedApples.length) {
    const appleBox = sortedApples.slice(m * index, m * (index + 1));
    const lowPrice = appleBox[appleBox.length - 1];
    answer += lowPrice * m;
    index += 1;
  }

  return answer;
}
