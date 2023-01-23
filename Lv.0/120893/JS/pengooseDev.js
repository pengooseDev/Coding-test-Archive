function solution(my_string) {
  return my_string
    .split('')
    .map((v) => (v.charCodeAt(0) > 93 ? v.toUpperCase() : v.toLowerCase()))
    .join('');
}
