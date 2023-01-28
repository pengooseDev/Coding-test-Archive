function solution(x) {
  if (x < 10) return true;
  const myNum = String(x)
    .split('')
    .map((v) => Number(v))
    .reduce((acc, curr) => (acc += curr));

  return x % myNum === 0 ? true : false;
}
