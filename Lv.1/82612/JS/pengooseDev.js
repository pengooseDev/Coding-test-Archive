function solution(price, money, count) {
  const cost = new Array(count)
    .fill('')
    .map((v, i) => (i + 1) * price)
    .reduce((acc, curr) => (acc += curr));

  if (money - cost > 0) return 0;
  return Math.abs(money - cost);
}
