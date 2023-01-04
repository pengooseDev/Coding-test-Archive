function solution(array) {
  let answer = { key: 0, value: 0 };
  let mapArr = [];
  const myMap = new Map();
  for (let i of array) {
    myMap.set(i, (myMap.get(i) || 0) + 1);
  }

  myMap.forEach((value, key) => {
    mapArr.push(value);
    if (value > answer.value) {
      answer = { key, value };
    }
  });

  mapArr.sort((a, b) => a - b);
  if (mapArr[mapArr.length - 1] === mapArr[mapArr.length - 2]) return -1;

  return answer.key;
}
