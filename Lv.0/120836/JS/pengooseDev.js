function solution(n) {
  const limit = parseInt(Math.sqrt(n));
  let answer = 0;

  for (let i = 1; i <= limit; i++) {
    if (n % i === 0) answer += 1;
    if (i ** 2 === n) answer -= 0.5;
  }

  return answer * 2;
}
