function solution(elements) {
  const arr = [...elements, ...elements];
  const mySet = new Set();

  for (let i = 1; i <= elements.length; i++) {
    for (let j = 0; j <= elements.length - 1; j++) {
      const targetArr = [...arr].slice(j, j + i);
      let res = 0;
      for (let k of targetArr) {
        res += k;
      }
      mySet.add(res);
    }
  }

  return mySet.size;
}
