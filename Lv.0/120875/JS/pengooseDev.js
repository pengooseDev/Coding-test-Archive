function solution(dots) {
  const myMap = new Map();
  let answer = false;
  myMap.set(getInclination(0, 1, dots), getInclination(2, 3, dots));
  myMap.set(getInclination(0, 2, dots), getInclination(1, 3, dots));
  myMap.set(getInclination(0, 3, dots), getInclination(1, 2, dots));

  myMap.forEach((value, key) => {
    if (value === key) answer = true;
  });

  return answer ? 1 : 0;
}

const getInclination = (index1, index2, arr) => {
  const [x1, x2, y1, y2] = [
    arr[index1][0],
    arr[index2][0],
    arr[index1][1],
    arr[index2][1],
  ];
  return (y2 - y1) / (x2 - x1);
};
