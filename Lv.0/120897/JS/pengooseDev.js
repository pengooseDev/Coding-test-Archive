function solution(n) {
  const answer = [];
  for (let i of new Array(n).fill('').map((v, i) => i + 1)) {
    if (n % i === 0) answer.push(i);
  }

  return answer;
}
