function solution(balls, share) {
  let n;
  parseInt(balls / 2) < share ? (n = balls - share) : (n = share);

  const numArr = new Array(n).fill('').map((v, i) => balls - i);
  const denomArr = new Array(n).fill('').map((v, i) => i + 1);
  const num = numArr.reduce((acc, curr) => (acc *= curr), 1);
  const denom = denomArr.reduce((acc, curr) => (acc *= curr), 1);

  return num / denom;
}
