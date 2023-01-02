function solution(topping) {
  let answer = 0;
  const [chalse, chalseBro] = [new Set(), new Map()];

  topping.forEach((i) => {
    chalseBro.set(i, (chalseBro.get(i) || 0) + 1);
  });

  for (let i of topping) {
    chalseBro.set(i, chalseBro.get(i) - 1);
    if (!chalseBro.get(i)) chalseBro.delete(i);

    chalse.add(i);
    if (chalse.size > chalseBro.size) return answer;
    if (chalse.size === chalseBro.size) answer += 1;
  }
}

/*
기능 명세
- [x] 동생에게 Map, 형에게 Set을 할당한다.
- [x] 동생에게 모든 토핑을 할당한다.
- [x] 토핑을 하나씩 형에게 할당한다.
- [x] 동생에게 i에 해당하는 토핑개수를 차감한다.
- [x] 형의 Set에 해당 토핑을 추가한다.
- [x] size를 비교한다.
- [x] 형의 토핑이 더 많아지는 순간 answer를 return한다.
- [x] 형과 동생의 size가 동일하면 answer += 1;
*/
