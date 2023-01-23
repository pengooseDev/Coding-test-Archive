function solution(sides) {
  const large = Math.max(...sides);
  sides.splice(sides.indexOf(large), 1);
  const [a, b] = sides;

  return a + b > large ? 1 : 2;
}
