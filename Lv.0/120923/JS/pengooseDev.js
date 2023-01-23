function solution(num, total) {
  const target = total / num;
  const hasRemain = total % num ? true : false;

  if (!hasRemain)
    return new Array(num)
      .fill('')
      .map((v, i) => target - parseInt(num / 2) + i);
  return new Array(num)
    .fill('')
    .map((v, i) => parseInt(target) - parseInt(num / 2) + i + 1);
}
