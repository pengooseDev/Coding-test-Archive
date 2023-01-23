function solution(a, b) {
  const GCD = getGCD(a, b);
  let targetNumber = b / GCD;
  while (!(targetNumber % 5)) targetNumber = targetNumber / 5;
  while (!(targetNumber % 2)) targetNumber = targetNumber / 2;

  return targetNumber === 1 ? 1 : 2;
}

const getGCD = (x, y) => (y ? getGCD(y, x % y) : x);
