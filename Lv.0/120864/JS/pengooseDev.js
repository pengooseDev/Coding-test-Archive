/* Regex 풀이 */
function solution(my_string) {
  const myArr = my_string.match(/[0-9]*/g).filter((v) => v);
  if (myArr.length === 0) return 0;
  return myArr.map((v) => Number(v)).reduce((acc, curr) => (acc += curr));
}

/* Slide Window 탐색 풀이 */
function solution(my_string) {
  const stringArr = my_string
    .split('')
    .map((v) => (!Number(v) ? (v === '0' ? v : '|') : v));
  const myArr = [];
  const end = stringArr.reduce((acc, curr) => {
    if (curr === '|') {
      myArr.push(acc);
      return '|';
    }

    if (acc === '|' && Number(curr)) return curr;

    return (acc += curr);
  });

  if (Number(end)) myArr.push(end);

  return myArr
    .filter((v) => Number(v))
    .map((v) => Number(v))
    .reduce((acc, curr) => (acc += curr), 0);
}
