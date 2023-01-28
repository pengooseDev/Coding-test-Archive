function solution(n) {
  let answer = 0;
  for (let i = 2; i <= n; i++) if (isPrime(i)) answer += 1;

  return answer;
}

const isPrime = (number) => {
  for (let i = 2; i <= Math.sqrt(number); i++)
    if (number % i === 0) return false;

  return true;
};

/* 에라토스테네스의 체 */
function solution(n) {
  const myMap = new Map();
  for (let i = 2; i <= n; i++) myMap.set(i, i);

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (myMap.has(i)) {
      for (let j = i * 2; j <= n; j += i) {
        myMap.delete(j);
      }
    }
  }

  return myMap.size;
}
