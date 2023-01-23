function solution(bin1, bin2) {
  const binArr = String(Number(bin1) + Number(bin2))
    .split('')
    .map((v) => Number(v));
  const reversedArr = binArr.map((v, i) => binArr[binArr.length - 1 - i]);
  reversedArr.forEach((v, i) => {
    if (v === 2) {
      reversedArr[i] = 0;
      reversedArr[i + 1] ? (reversedArr[i + 1] += 1) : (reversedArr[i + 1] = 1);
    }

    if (v === 3) {
      reversedArr[i] = 1;
      reversedArr[i + 1] ? (reversedArr[i + 1] += 1) : (reversedArr[i + 1] = 1);
    }
  });

  const answer = reversedArr
    .map((v, i) => reversedArr[reversedArr.length - 1 - i])
    .join('');
  return answer;
}
