function solution(my_str, n) {
  const answer = [];
  for (let i = 0; n * (i - 1) + n <= my_str.length - 1; i++) {
    const myStr = my_str.slice(n * i, n * i + n);
    answer.push(myStr);
  }

  return answer;
}
