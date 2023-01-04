function solution(denum1, num1, denum2, num2) {
  const LCM = getLCM(num1, num2);
  const a = (denum1 * LCM) / num1;
  const b = (denum2 * LCM) / num2;
  const GCD = getGCD(a + b, LCM);

  return [(a + b) / GCD, LCM / GCD];
}

const getGCD = (x, y) => (y ? getGCD(y, x % y) : x);
const getLCM = (x, y) => (x * y) / getGCD(x, y);
