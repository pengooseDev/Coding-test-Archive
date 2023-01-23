function solution(box, n) {
  return box
    .map((v) => parseInt(v / n))
    .reduce((acc, curr) => (acc *= curr), 1);
}
