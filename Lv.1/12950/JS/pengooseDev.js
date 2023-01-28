function solution(arr1, arr2) {
  let answer = [];
  const res = [];
  let concatUnit = 0;
  const myMap = new Map();
  for (let [i, v] of arr1.entries()) myMap.set(v, arr2[i]);
  const myArr = myMap.forEach((value, key) => {
    concatUnit = value.length;
    value.map((v, i) => {
      answer.push([v + key[i]]);
    });
  });

  for (let i = 0; i <= answer.length / concatUnit - 1; i++) {
    res.push([...answer].splice(i * concatUnit, concatUnit).flat());
  }

  return res;
}
