function solution(dots) {
  const xArr = dots.map((v) => v[0]).sort((a, b) => b - a);
  const yArr = dots.map((v) => v[1]).sort((a, b) => b - a);
  const x = xArr[0] - xArr.pop();
  const y = yArr[0] - yArr.pop();

  return x * y;
}
