function solution(a, b) {
  const dateArr = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
  let accDay = 0;
  Object.entries(dateMap).forEach(([key, value]) => {
    if (key < a) accDay += value;
  });
  accDay += b;

  return accDay % dateArr.length
    ? dateArr[(accDay % dateArr.length) - 1]
    : dateArr[6];
}

const dateMap = {
  1: 31,
  2: 29,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};
