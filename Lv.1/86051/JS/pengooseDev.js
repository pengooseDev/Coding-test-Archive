function solution(numbers) {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i of numbers) arr.splice(arr.indexOf(i), 1);
  const answer = arr.reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  return answer;
}
