function solution(k, ranges) {
  let answer = [];
  const data = {};
  let number = k;
  let index = 0;
  let oddNumber;

  while (number !== 1) {
    oddNumber = isOdd(number);
    if (oddNumber) {
      data[index] = number;
      index += 1;
      number = 3 * number + 1;
      continue;
    }

    data[index] = number;
    index += 1;
    number = number / 2;
  }
  data[index] = number;

  for (let i of ranges) {
    if (i[0] - i[1] > Object.keys(data).length - 1) {
      answer.push(-1);
      continue;
    }

    if (i[0] === 0 && i[1] === 0) {
      const area = getArea(i[0], i[1], data);
      answer.push(area);
      continue;
    }

    const area = getArea(i[0], i[1], data);
    answer.push(area);
  }

  return answer;
}

const getArea = (a, b, data) => {
  const start = a;
  const end = Object.keys(data).length - 1 + b;
  let acc = 0;
  for (let i = start; i < end; i++) {
    const height = data[i] + data[i + 1];
    const width = 1;
    const area = (height * width) / 2;
    acc += area;
  }

  return acc;
};

const isOdd = (number) => {
  if (number % 2 === 1) return true;
  return false;
};
