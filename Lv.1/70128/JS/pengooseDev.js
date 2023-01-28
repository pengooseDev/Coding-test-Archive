function solution(n) {
  return n
    .toString(3)
    .split('')
    .map((v, i) => Number(v) * Math.pow(3, i))
    .reduce((acc, curr) => (acc += curr));
}
