function solution(numbers) {
  const myArr = [];
  for (let i = 0; i <= numbers.length - 1; i++) {
    for (let j = i + 1; j <= numbers.length - 1; j++) {
      myArr.push(numbers[i] + numbers[j]);
    }
  }

  return [...new Set(myArr.sort((a, b) => a - b))];
}
