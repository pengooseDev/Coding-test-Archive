function solution(absolutes, signs) {
  return signs
    .map((v, i) => (v ? absolutes[i] : -absolutes[i]))
    .reduce((acc, curr) => (acc += curr));
}
