function solution(n) {
  let index = 1;
  if (n === 1) return 1;
  while (n !== 1) {
    n = n / index;
    if (parseInt(n / index) === 0) return index;
    index += 1;
  }
}
