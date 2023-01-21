function solution(angle) {
  const value = angle / 90;
  if (value < 1) return 1;
  if (value === 1) return 2;
  if (value < 2) return 3;
  if (value == 2) return 4;
}
