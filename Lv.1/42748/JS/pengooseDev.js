function solution(array, commands) {
  const answer = [];
  for (let i of commands) {
    const [start, end, index] = i;
    const myArr = [...array].slice(start - 1, end).sort((a, b) => a - b);
    answer.push(myArr[index - 1]);
  }

  return answer;
}
