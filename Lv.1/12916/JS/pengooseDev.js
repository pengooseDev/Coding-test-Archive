function solution(s) {
  const myArr = s
    .toLowerCase()
    .replaceAll('p', '1')
    .replaceAll('y', '2')
    .split('')
    .filter((v) => Number(v));

  if (!myArr.length) return true;

  return myArr
    .map((v) => {
      if (v === '1') return 1;
      return -1;
    })
    .reduce((acc, curr) => (acc += curr))
    ? false
    : true;
}
