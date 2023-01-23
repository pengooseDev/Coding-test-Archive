function solution(n) {
  const decimals = [2, 3, 5, 7];
  const myArr = new Array(n)
    .fill('')
    .map((v, i) => i + 1)
    .filter((v) => decimals.indexOf(v) === -1);
  const mySet = new Set();

  for (let i of myArr) {
    for (let j of decimals)
      if (i % j === 0) mySet.add([...myArr].splice(myArr.indexOf(i), 1)[0]);
  }

  return mySet.size;
}
