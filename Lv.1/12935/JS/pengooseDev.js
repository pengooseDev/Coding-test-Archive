function solution(arr) {
  if (arr.length <= 1) return [-1];
  const target = [...arr].sort((a, b) => b - a).pop();
  arr.splice(arr.indexOf(target), 1);
  return arr;
}
