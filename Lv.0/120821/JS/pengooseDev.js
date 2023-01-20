function solution(num_list) {
  const answer = [];
  for (let _ of [...num_list]) answer.push(num_list.pop());
  return answer;
}
