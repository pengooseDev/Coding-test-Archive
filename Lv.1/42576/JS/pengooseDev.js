function solution(participant, completion) {
  let answer = '';
  const myMap = new Map();
  for (let i of participant) myMap.set(i, myMap.get(i) + 1 || 1);
  for (let i of completion) myMap.set(i, myMap.get(i) - 1 || 0);

  myMap.forEach((value, key) => {
    if (value) answer = key;
  });

  return answer;
}
