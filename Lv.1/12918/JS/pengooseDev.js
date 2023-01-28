function solution(s) {
  const numArr = s
    .split('')
    .map((v) => (v === '0' ? '1' : v))
    .filter((v) => Number(v));
  if (numArr.length !== s.length) return false;
  if (numArr.length === 4 || numArr.length === 6) return true;
  return false;
}
