function solution(my_string) {
  const zeroArr = my_string
    .split('')
    .filter((v) => v === '0')
    .map((v) => Number(v));
  const numArr = my_string
    .split('')
    .filter((v) => Number(v))
    .map((v) => Number(v));
  return [...zeroArr, ...numArr.sort((a, b) => a - b)];
}
