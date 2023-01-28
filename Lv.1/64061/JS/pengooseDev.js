function solution(board, moves) {
  let answer = 0;
  const myMap = new Map();
  for (let [i, v] of board.entries()) myMap.set(i, v);
  const cherrys = moves
    .map((v) => {
      const targetIndex = v - 1;
      let cherry = 0;
      let depth = 0;

      while (!cherry && depth <= board.length - 1) {
        cherry = myMap.get(depth)[targetIndex];
        if (cherry) {
          const newArr = myMap.get(depth);
          newArr.splice(targetIndex, 1, '');
          myMap.set(depth, newArr);
        }

        depth += 1;
      }

      return cherry;
    })
    .filter((v) => v);

  let prev = cherrys.length;
  let curr = -1;
  while (prev !== curr) {
    prev = cherrys.length;
    for (let i = 0; i <= cherrys.length - 1; i++) {
      if (cherrys[i] === cherrys[i + 1]) {
        cherrys.splice(i, 2);
        answer += 2;
      }
    }
    curr = cherrys.length;
  }

  return answer;
}
