function solution(n, m) {
  return [getGCD(n, m), getLCM(n, m)];
}

const getGCD = (x, y) => (y ? getGCD(y, x % y) : x);
const getLCM = (x, y) => (x * y) / getGCD(x, y);
