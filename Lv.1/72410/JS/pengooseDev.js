function solution(new_id) {
  let prev = new_id.length;
  let cur = 0;
  let myString = new_id;

  while (prev !== cur) {
    myString = getOne(myString);
    myString = getTwo(myString);
    myString = getThree(myString);
    myString = getFour(myString);
    myString = getFive(myString);
    myString = getSix(myString);
    myString = getSeven(myString);
    prev = cur;
    cur = myString.length;
  }

  return myString;
}

const getOne = (str) =>
  str
    .split('')
    .map((v) => v.toLowerCase())
    .join('');
const getTwo = (str) => str.match(/(-|_|[a-zA-Z]|[0-9]|\.)/g).join('');

const getThree = (str) => {
  let result = str;
  while (result.indexOf('..') !== -1) result = result.replaceAll('..', '.');
  return result;
};

const getFour = (str) => {
  if (str[0] === '.') str = str.substring(1, str.length);
  if (str.at(-1) === '.') str = str.substring(0, str.length - 1);

  return str;
};

const getFive = (str) => (str === '' ? (str = 'a') : str);
const getSix = (str) => (16 <= str.length ? str.substring(0, 15) : str);

const getSeven = (str) => {
  const target = str.at(-1);
  while (str.length <= 2) str += target;

  return str;
};
