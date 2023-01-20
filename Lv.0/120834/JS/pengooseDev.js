function solution(age) {
  const answer = age
    .toString()
    .split('')
    .reduce((acc, curr) => {
      return (acc += String.fromCharCode(Number(curr) + 97));
    }, '');

  return answer;
}
