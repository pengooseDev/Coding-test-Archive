function solution(s) {
  const myMap = new Map();
  let answer = [];
  for (let i of s) myMap.set(i, myMap.get(i) + 1 || 1);
  myMap.forEach((value, key) => (value === 1 ? answer.push(key) : ''));

  return answer.sort().join('');
}
