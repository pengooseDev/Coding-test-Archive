function solution(order) {
  const res = String(order).match(/[3|6|9]/g);
  return res ? res.length : 0;
}
