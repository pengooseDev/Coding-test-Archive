function solution(emergency) {
  const myList = [];
  emergency.forEach((v, i) => (myList[v] = emergency.length - i));
  const answer = myList.filter((v) => v);

  return answer;
}
