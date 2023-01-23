function solution(lines) {
  let answer = 0;
  let initial = true;
  const myMap = new Map();

  for (let i of lines) {
    initial = true;
    for (let j = i[0]; j <= i[1]; j++) {
      if (initial) {
        initial = false;
        myMap.set(j, myMap.get(j) || 0);
        continue;
      }

      myMap.set(j, myMap.get(j) + 1 || 1);
    }
  }

  const stringLines = [...myMap.values()]
    .join('')
    .replaceAll(1, '|')
    .split('')
    .map((v) => (Number(v) ? 1 : '|'))
    .join('');
  stringLines
    .match(/[1-9]*/g)
    .filter((v) => v)
    .forEach((v) => (answer += v.length));

  return answer;
}
