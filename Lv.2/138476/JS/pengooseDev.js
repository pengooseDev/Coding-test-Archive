function solution(k, tangerine) {
  const clf = {};
  let amount = 0;
  let answer = 0;

  tangerine.forEach((value) => {
    if (clf[value]) return (clf[value] += 1);
    return (clf[value] = 1);
  });

  const sortedTangerine = Object.values(clf).sort((a, b) => b - a);

  for (let i of sortedTangerine) {
    if (amount >= k) return answer;
    amount += i;
    answer += 1;
  }
}
