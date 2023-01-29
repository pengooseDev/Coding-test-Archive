function solution(n) {
  let prev = 0,
    curr = 1,
    newValue;
  for (let i = 2; i <= n + 1; i++) {
    newValue = (curr + prev) % 1000000007;
    prev = curr;
    curr = newValue;
  }
  return curr % 1000000007;
}
