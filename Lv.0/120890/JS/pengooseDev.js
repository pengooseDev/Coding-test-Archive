function solution(array, n) {
  const myMap = new Map();
  array.sort((a, b) => b - a);
  for (let i of array) myMap.set(Math.abs(n - i), i);

  const key = Math.min(...myMap.keys());

  return myMap.get(key);
}
