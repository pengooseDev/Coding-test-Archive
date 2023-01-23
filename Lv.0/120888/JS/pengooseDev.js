function solution(my_string) {
  let answer = '';
  const myMap = new Map();
  my_string.split('').forEach((v) => myMap.set(v, v));
  myMap.forEach((v) => (answer += v));

  return answer;
}
