function solution(babbling) {
  const soundables = ['aya', 'ye', 'woo', 'ma'];
  const res = babbling.map((word) => {
    for (let i of soundables) word = word.replace(i, '1');
    return word;
  });

  const answer = res.filter((v) => Number(v)).length;

  return answer;
}
