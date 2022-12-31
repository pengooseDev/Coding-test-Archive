function solution(ingredient) {
  let answer = 0;
  const stack = [];
  const HAMBURGER = '1231';

  ingredient.forEach((value, index) => {
    stack.push(value);
    if (stack.length >= 4) {
      if (stack.slice(-4).join('') === HAMBURGER) {
        answer += 1;
        stack.splice(-4, 4);
      }
    }
  });

  return answer;
}
