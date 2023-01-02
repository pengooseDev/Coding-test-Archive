function solution(number) {
  let answer = 0;
  for (let i = 0; i <= number.length - 1; i++) {
    for (let j = 0; j < i; j++) {
      for (let k = 0; k < j; k++) {
        if (number[i] + number[j] + number[k] === 0) {
          answer += 1;
        }
      }
    }
  }

  return answer;
}
