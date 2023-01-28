function solution(n) {
  return Number(
    String(n)
      .split('')
      .map((v) => Number(v))
      .sort((a, b) => b - a)
      .join('')
  );
}
