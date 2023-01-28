function solution(s) {
  return s
    .split(' ')
    .map((v) => {
      let strArr = Array.from(v);
      return strArr
        .map((v, i) => (i % 2 !== 1 ? v.toUpperCase() : v.toLowerCase()))
        .join('');
    })
    .join(' ');
}
