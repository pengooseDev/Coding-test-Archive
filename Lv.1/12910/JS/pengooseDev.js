function solution(arr, divisor) {
  return arr.filter((v) => v % divisor === 0).length === 0
    ? [-1]
    : arr.filter((v) => v % divisor === 0).sort((a, b) => a - b);
}
