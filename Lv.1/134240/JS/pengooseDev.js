function solution(food) {
  let foodArray = [];
  food.forEach((value, index) => {
    if (index === 0) return;

    const amount = parseInt(value / 2);
    const foods = new Array(amount).fill(index);
    foodArray = [...foodArray, ...foods];
  });

  const reverseFoodArray = [...foodArray].reverse();
  foodArray = [...foodArray, 0, ...reverseFoodArray];
  const answer = foodArray.join("");

  return answer;
}
