function solution(numbers) {
  const sum = numbers.reduce((acc, curr) => {
    return (acc += curr);
  }, 0);

  return sum / numbers.length;
}
