function solution(X, Y) {
  const XMap = new Map();
  const YMap = new Map();
  const YArr = Array.from(Y);
  const resultArr = [];
  for (let i of Array.from(X)) XMap.set(i, XMap.get(i) + 1 || 1);
  for (let i of Array.from(Y)) YMap.set(i, YMap.get(i) + 1 || 1);

  const putArr = (time, value) => {
    const repeatArr = new Array(time);
    for (let i of repeatArr) {
      resultArr.push(value);
    }

    resultArr.push();
  };

  XMap.forEach((value, key) => {
    if (YMap.get(key)) {
      const vias = value - YMap.get(key);
      if (vias <= 0) putArr(value, key);
      if (vias > 0) putArr(YMap.get(key), key);
    }
  });

  const sortedArr = resultArr.sort((a, b) => b - a);
  const answer = sortedArr.length ? sortedArr.join('') : '-1';
  const isZero = answer.replaceAll('0', '');

  if (!isZero) return '0';
  return answer.toString();
}
