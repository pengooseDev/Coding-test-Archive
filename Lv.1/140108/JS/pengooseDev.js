function solution(s) {
  const solutionData = { text: [], count: 1 };

  const lastWord = s.split('').reduce((acc, curr) => {
    if (solutionData.count === 0) {
      solutionData['text'].push(acc);
      solutionData.count += 1;
      return curr;
    }

    if (acc[0] === curr) {
      solutionData.count += 1;
      return (acc += curr);
    }

    solutionData.count -= 1;
    return (acc += curr);
  });

  const answer = solutionData['text'].push(lastWord);

  return answer;
}
