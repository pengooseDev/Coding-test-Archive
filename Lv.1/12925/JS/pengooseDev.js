function solution(s) {
  const res = s
    .match(/(-?)([0-9]*)/g)
    .filter((v) => v)
    .map((v) => Number(v));
  return res[0];
}
