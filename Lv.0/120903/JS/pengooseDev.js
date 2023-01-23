function solution(s1, s2) {
  let answer = 0;
  const myMap = new Map();
  for (let i of s1) myMap.set(i, myMap.get(i) + 1 || 1);
  for (let i of s2) myMap.has(i) ? (answer += 1) : null;

  return answer;
}
