function solution(survey, choices) {
  let answer = '';
  let type;
  let surveyType;
  let bias;

  const table = {
    RT: 0,
    CF: 0,
    JM: 0,
    AN: 0,
  };

  survey.map((value, index) => {
    const score = choices[index] - 4;

    Object.keys(table).map((v, index) => {
      const checkedType = v.includes(value[0]);
      if (checkedType) {
        type = v;
        return (surveyType = value);
      }
    });

    score > 0 ? (bias = value[1]) : (bias = value[0]);

    const biasType = type === surveyType;
    biasType ? (table[type] += score) : (table[type] -= score);
  });

  Object.entries(table).map(([key, value], index) => {
    if (value === 0) {
      return (answer += key[0]);
    }

    value > 0 ? (answer += key[1]) : (answer += key[0]);
  });

  return answer;
}
