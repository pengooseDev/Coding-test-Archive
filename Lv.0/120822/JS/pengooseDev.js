function solution(my_string) {
  const answer = [];
  const myString = my_string.split('');
  for (let _ of [...myString]) answer.push(myString.pop());
  return answer.join('');
}
