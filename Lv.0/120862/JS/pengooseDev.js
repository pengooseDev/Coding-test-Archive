function solution(numbers) {
  numbers.sort((a, b) => b - a);
  const a = numbers.shift() * numbers.shift();
  const b = numbers.pop() * numbers.pop();
  if (a < b) return b;
  return a;
}
