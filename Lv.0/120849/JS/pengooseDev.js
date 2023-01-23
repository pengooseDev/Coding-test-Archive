function solution(my_string) {
  for (let i of Array.from('aeiou')) my_string = my_string.replaceAll(i, '');

  return my_string;
}
