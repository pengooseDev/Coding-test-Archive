function solution(a, b) {
  return new Array(Math.abs(a - b) + 1)
    .fill('')
    .map((v, i) => Math.min(a, b) + i)
    .reduce((acc, curr) => (acc += curr));
}
