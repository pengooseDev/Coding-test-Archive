function solution(n) {
  return Array.from(new Array(Math.ceil(n / 2)).fill(1), (_, i) => i * 2 + 1);
}
