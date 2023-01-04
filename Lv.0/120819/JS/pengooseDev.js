function solution(money) {
  const PRICE = 5500;
  return [parseInt(money / PRICE), money % PRICE];
}
