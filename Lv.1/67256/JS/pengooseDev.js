function solution(numbers, hand) {
  let [l, r] = [CONSTANT.L_START, CONSTANT.R_START];
  const answer = [];
  const lNum = [NUMBER.ONE, NUMBER.FOUR, NUMBER.SEVEN];
  const rNum = [NUMBER.THREE, NUMBER.SIX, NUMBER.NINE];

  for (let des of numbers) {
    if (lNum.includes(des)) {
      l = des;
      answer.push(CONSTANT.LEFT);
      continue;
    }

    if (rNum.includes(des)) {
      r = des;
      answer.push(CONSTANT.RIGHT);
      continue;
    }

    let costL = getCost(l, des, myGraph);
    let costR = getCost(r, des, myGraph);
    if (costL === costR) {
      if (hand === CONSTANT.L_HAND) {
        l = des;
        answer.push(CONSTANT.LEFT);
        continue;
      }
      r = des;
      answer.push(CONSTANT.RIGHT);
      continue;
    }

    if (costL < costR) {
      l = des;
      answer.push(CONSTANT.LEFT);
      continue;
    }

    r = des;
    answer.push(CONSTANT.RIGHT);
    continue;
  }

  return answer.join('');
}

const getCost = (l, des, myGraph) => {
  const [[x1, y1], [x2, y2]] = [myGraph[l], myGraph[des]];

  return Math.abs(y1 - y2) + Math.abs(x1 - x2);
};

/* Map */
const myGraph = {
  1: [0, 0],
  2: [0, 1],
  3: [0, 2],
  4: [1, 0],
  5: [1, 1],
  6: [1, 2],
  7: [2, 0],
  8: [2, 1],
  9: [2, 2],
  '*': [3, 0],
  0: [3, 1],
  '#': [3, 2],
};

/* CONSTANT */
const CONSTANT = Object.freeze({
  LEFT: 'L',
  RIGHT: 'R',
  L_START: '*',
  R_START: '#',
  L_HAND: 'left',
  R_HAND: 'right',
});

const NUMBER = Object.freeze({
  ZERO: 0,
  ONE: 1,
  TWO: 2,
  THREE: 3,
  FOUR: 4,
  FIVE: 5,
  SIX: 6,
  SEVEN: 7,
  EIGHT: 8,
  NINE: 9,
});
