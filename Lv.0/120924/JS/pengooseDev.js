function solution(common) {
  let isAri = false;
  if (common[2] - common[1] === common[1] - common[0]) isAri = true;
  if (isAri) return common[common.length - 1] + common[2] - common[1];
  return common[common.length - 1] * (common[2] / common[1]);
}
