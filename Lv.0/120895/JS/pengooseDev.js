function solution(my_string, num1, num2) {
  const [a, b] = [my_string[num1], my_string[num2]];
  const myArr = my_string.split('');
  myArr[num1] = b;
  myArr[num2] = a;

  return myArr.join('');
}
