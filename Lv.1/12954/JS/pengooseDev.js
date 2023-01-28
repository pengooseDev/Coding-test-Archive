function solution(x, n) {
  return new Array(n).fill('').map((v, i) => (i + 1) * x);
}
