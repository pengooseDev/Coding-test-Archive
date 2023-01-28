function solution(n, lost, reserve) {
  let answer = 0;
  const myMap = new Map();
  for (let i = 1; i <= n; i++) myMap.set(i, 1);
  for (let i of lost) myMap.set(i, 0);
  for (let i of reserve) myMap.set(i, myMap.get(i) + 1 || 1);

  for (let i = 1; i <= n; i++) {
    if (myMap.get(i) === 0) {
      if (myMap.get(i - 1) === 2) {
        myMap.set(i - 1, 1);
        myMap.set(i, 1);
        continue;
      }

      if (myMap.get(i + 1) === 2) {
        myMap.set(i + 1, 1);
        myMap.set(i, 1);
        continue;
      }
    }
  }

  for (let i of [...myMap.values()]) i ? answer++ : '';

  return answer;
}
