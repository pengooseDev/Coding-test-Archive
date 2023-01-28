function solution(nums) {
  const myMap = new Map();
  for (let i of nums) myMap.set(i, 1);

  return [...myMap.keys()].length - nums.length / 2 > 0
    ? nums.length / 2
    : [...myMap.keys()].length;
}
