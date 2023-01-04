function solution(storey) {
  let answer = 0;
  let index = 0;
  let number = storey;
  let arr = Array.from(String(number), (i) => Number(i));
  while (index <= arr.length - 1) {
    const curr = arr[arr.length - 1 - index];
    const distance = getDistance(curr);
    answer += distance;

    if (curr === 5) {
      const next = arr[arr.length - 2 - index];
      if (next > 4) {
        number = storey + 10 ** (index + 1);
        arr = Array.from(String(number), (i) => Number(i));
      }
      index++;
      continue;
    }

    if (curr < 5) {
      index++;
      continue;
    }

    number = storey + 10 ** (index + 1);
    arr = Array.from(String(number), (i) => Number(i));
    index++;
  }

  return answer;
}

const getDistance = (number) => {
  return 5 - Math.sqrt(Math.pow(number - 5, 2));
};
