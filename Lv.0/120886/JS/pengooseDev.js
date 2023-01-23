function solution(before, after) {
  let answer = 1;
  const myMap = new Map();
  for (let i of before) myMap.set(i, myMap.get(i) + 1 || 1);
  for (let i of after) myMap.set(i, myMap.get(i) - 1);

  myMap.forEach((value, key) => {
    if (value !== 0) answer = 0;
  });

  return answer;
}
