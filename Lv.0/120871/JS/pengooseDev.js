function solution(n) {
  const myArr = new Array(n * 3)
    .fill('')
    .map((v, i) => i + 1)
    .filter((v) => v % 3 !== 0);
  const filteredArr = myArr.filter((v) => String(v).indexOf(3) === -1);

  return filteredArr[n - 1];
}
