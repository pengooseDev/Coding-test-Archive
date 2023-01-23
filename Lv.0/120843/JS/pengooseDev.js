function solution(numbers, k) {
  return numbers[((2 * k - 1) % numbers.length) - 1];
}
