function solution(babbling) {
  const soundables = ['aya', 'ye', 'woo', 'ma'];
  const res = babbling.map((word) => {
    for (let j of soundables) {
      const wordIndex = word.indexOf(j);
      word = word.replace(j, '1');
    }
    return word;
  });

  const answer = res.filter((v) => Number(v)).length;

  return answer;
}
