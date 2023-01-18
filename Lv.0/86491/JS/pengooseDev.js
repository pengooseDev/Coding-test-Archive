function solution(sizes) {
  const sortedArr = sizes.map((v) => v.sort((a, b) => b - a));
  const w = [];
  const h = [];
  sortedArr.forEach((v) => {
    w.push(v[0]);
    h.push(v[1]);
  });
  w.sort((a, b) => b - a);
  h.sort((a, b) => b - a);

  return w[0] * h[0];
}
