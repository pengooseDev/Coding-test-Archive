function solution(lottos, win_nums) {
  const myNums = lottos.filter((v) => v);
  const wildCard = lottos.length - myNums.length;
  const winMap = new Map();
  let count = 0;

  for (let i of win_nums) winMap.set(i, 1);
  for (let i of myNums) winMap.has(i) ? count++ : '';
  const [max, min] = [count + wildCard, count];

  return [PRICE_LIST[max], PRICE_LIST[min]];
}

const PRICE_LIST = Object.freeze({
  6: 1,
  5: 2,
  4: 3,
  3: 4,
  2: 5,
  1: 6,
  0: 6,
});
