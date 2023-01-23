function solution(numbers) {
  const sortedArr = numbers.sort((a, b) => b - a);
  return sortedArr[0] * sortedArr[1];
}
