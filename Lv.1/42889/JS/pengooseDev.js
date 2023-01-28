function solution(N, stages) {
  const clearMap = new Map();
  const stageMap = new Map();
  let sortedClearArr;
  const answer = [];

  for (let i = 1; i <= N; i++) stageMap.set(i, 0);
  for (let i of stages) i <= N ? stageMap.set(i, stageMap.get(i) + 1 || 1) : '';
  for (let i of stages) {
    for (let j = 1; j <= i; j++) {
      if (N < j) continue;
      clearMap.set(j, clearMap.get(j) + 1 || 1);
    }
  }

  let myIndex = 0;
  stageMap.forEach((value, key) => {
    myIndex++;
    if (N < key) return;
    if (!value) return clearMap.set(myIndex, 0);
    clearMap.set(myIndex, value / clearMap.get(myIndex));
  });

  sortedClearArr = [...clearMap.values()]
    .sort((a, b) => b - a)
    .map((v) => (v ? v : 0));
  sortedClearArr.map((target) => {
    const targetKey = getTargetKey(clearMap, target);
    answer.push(targetKey);
    if (targetKey) clearMap.delete(targetKey);
  });

  return answer;
}

const getTargetKey = (myMap, target) => {
  for (let [key, value] of myMap.entries()) if (target === value) return key;
};
