function solution(dartResult) {
  let answer = 0;
  const myMap = new Map();
  let parsedArr = dartResult.match(/([0-9])([0-9])?[a-zA-z][*|#]?/g);
  const scoreArr = [];

  parsedArr = parsedArr.map((v, index) => {
    myMap.set(index, 1);
    const target = v.split('').find((i) => {
      if (!Number(i) && i !== '0') return i;
    });
    const targetIndex = v.indexOf(target);
    return [
      v.slice(0, targetIndex),
      v.slice(targetIndex, targetIndex + 1),
      v.slice(targetIndex + 1, v.length),
    ];
  });

  for (let i of parsedArr) {
    if (!i[2]) {
      const targetIndex = parsedArr.indexOf(i);
      const score = i[0];
      const scale = SCALE_BOARD[i[1]];
      const totalScore = Math.pow(score, scale);
      scoreArr.push(totalScore);
    }

    if (i[2]) {
      const score = i[0];
      const scale = SCALE_BOARD[i[1]];
      const option = i[2];
      if (option === '*') {
        const targetIndex = parsedArr.indexOf(i);
        myMap.set(targetIndex - 1, myMap.get(targetIndex - 1) * 2 || 2);
        myMap.set(targetIndex, myMap.get(targetIndex) * 2 || 2);
      }

      if (option === '#') {
        const targetIndex = parsedArr.indexOf(i);
        myMap.set(targetIndex, myMap.get(targetIndex) * -1 || -1);
      }

      const totalScore = Math.pow(score, scale);
      scoreArr.push(totalScore);
    }
  }

  myMap.forEach((value, key) => {
    if (0 <= key) answer += scoreArr[key] * value;
  });

  console.log(scoreArr);
  console.log(myMap);

  return answer;
}

const SCALE_BOARD = Object.freeze({
  S: 1,
  D: 2,
  T: 3,
});
