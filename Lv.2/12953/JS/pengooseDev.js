function solution(arr) {
  let LCM = arr[0];
  for (let i = 1; i <= arr.length - 1; i++) {
    LCM = getLCM(LCM, arr[i]);
  }

  return LCM;
}

const getGCD = (x, y) => (y ? getGCD(y, x % y) : x);
const getLCM = (x, y) => (x * y) / getGCD(x, y);
