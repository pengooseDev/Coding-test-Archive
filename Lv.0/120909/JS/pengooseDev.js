function solution(n) {
  const isSquareNumber = Math.sqrt(n) % 1 === 0;
  if (isSquareNumber) return 1;
  return 2;
}
