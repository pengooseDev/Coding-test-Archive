function solution(sides) {
  sides.sort((a, b) => b - a);
  const bigArr = new Array(sides[1] - 1)
    .fill('')
    .map((v, i) => sides[0] + sides[1] - i - 1);
  const smallArr = new Array(sides[1]).fill('').map((v, i) => sides[0] - i);

  return [...smallArr, ...bigArr].length;
}
