function solution(numlist, n) {
  const myList = [];
  for (let i of numlist) {
    const absValue = Math.abs(n - i);
    !myList[3 * absValue]
      ? (myList[3 * absValue] = i)
      : myList[3 * absValue] < i
      ? (myList[3 * absValue - 1] = i)
      : (myList[3 * absValue + 1] = i);
  }

  const answer = myList.filter((v) => v);

  return answer;
}
