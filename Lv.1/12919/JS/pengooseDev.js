function solution(seoul) {
  let answer;
  seoul.forEach((v, i) => {
    v === 'Kim' ? (answer = i) : '';
  });

  return `김서방은 ${answer}에 있다`;
}
