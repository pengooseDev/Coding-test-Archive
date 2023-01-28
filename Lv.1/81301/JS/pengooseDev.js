function solution(s) {
  Object.entries(WORD_MAP).forEach(([key, value]) => {
    s = s.replaceAll(key, value);
  });

  return Number(s);
}

const WORD_MAP = Object.freeze({
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
});
