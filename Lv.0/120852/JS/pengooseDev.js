function solution(n) {
  const answer = [];
  const primeArr = [];
  for (let i of new Array(n).fill('').map((v, i) => i + 1))
    isPrime(i) ? primeArr.push(i) : '';
  for (let i of primeArr) n % i === 0 ? answer.push(i) : '';

  return answer;
}

function isPrime(number) {
  if (number === 1) return false;
  for (let i = 2; i <= number - 1; i++) if (number % i === 0) return false;

  return true;
}
