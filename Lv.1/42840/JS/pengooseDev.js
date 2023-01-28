function solution(answers) {
  const answer = [];
  const myMap = new Map();
  for (let [i, v] of answers.entries()) {
    if (v === SOLUTION_ARR.a[i % SOLUTION_ARR.a.length])
      myMap.set('1', myMap.get('1') + 1 || 1);
    if (v === SOLUTION_ARR.b[i % SOLUTION_ARR.b.length])
      myMap.set('2', myMap.get('2') + 1 || 1);
    if (v === SOLUTION_ARR.c[i % SOLUTION_ARR.c.length])
      myMap.set('3', myMap.get('3') + 1 || 1);
  }

  const max = Math.max(...myMap.values());
  myMap.forEach((value, key) => {
    console.log(value, key);
    if (max === value) answer.push(key);
  });
  const res = answer.map((v) => Number(v)).sort((a, b) => a - b);

  return res;
}

const SOLUTION_ARR = Object.freeze({
  a: [1, 2, 3, 4, 5],
  b: [2, 1, 2, 3, 2, 4, 2, 5],
  c: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
});
