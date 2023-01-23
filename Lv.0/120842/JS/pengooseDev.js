function solution(num_list, n) {
  return new Array(num_list.length / n)
    .fill('')
    .map((_, i) => num_list.slice(n * i, n * (i + 1)));
}
