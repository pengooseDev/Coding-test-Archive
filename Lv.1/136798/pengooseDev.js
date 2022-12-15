function solution(number, limit, power) {
  const answerArray = new Array(number + 1).fill(0);

  for (let i = 1; i <= number; i++) {
    for (let j = 1; j <= parseInt(number / i); j++) {
      answerArray[i * j] += 1;
    }
  }

  const answer = answerArray.reduce((acc, curr) => {
    if (curr > limit) return acc + power;
    return acc + curr;
  });

  return answer;
}
