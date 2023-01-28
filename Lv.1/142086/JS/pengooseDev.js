function solution(s) {
  const answer = [-1];
  s.split('').reduce((acc, curr, index) => {
    const duplicated = isDuplicated(acc, curr);
    if (duplicated) {
      answer.push(index - acc.lastIndexOf(curr));
    } else {
      answer.push(acc.lastIndexOf(curr));
    }

    return (acc += curr);
  });

  return answer;
}

const isDuplicated = (word, text) => {
  if (word.includes(text)) return true;
  return false;
};
