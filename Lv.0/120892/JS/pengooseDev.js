function solution(cipher, code) {
  return cipher
    .split('')
    .map((v, i) => cipher[(i + 1) * code - 1])
    .join('');
}
