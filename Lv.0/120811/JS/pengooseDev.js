function solution(array) {
  array.sort((a, b) => a - b);
  return array[(array.length - 1) / 2];
}
