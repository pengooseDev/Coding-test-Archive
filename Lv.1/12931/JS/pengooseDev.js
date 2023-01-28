function solution(n) {
  return String(n)
    .split('')
    .map((v) => Number(v))
    .reduce((acc, curr) => (acc += curr));
}
