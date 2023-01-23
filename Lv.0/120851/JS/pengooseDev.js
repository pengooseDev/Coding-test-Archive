function solution(my_string) {
  return my_string
    .split('')
    .filter((v) => Number(v))
    .map((v) => Number(v))
    .reduce((acc, curr) => (acc += curr), 0);
}
