function solution(a, b, n) {
  let answer = 0;
  let cola;
  let remainBottle = n;

  while (true) {
    cola = getNewCola(a, b, remainBottle);
    if (!cola && remainBottle < a) return answer;
    remainBottle = getRemainBottle(a, remainBottle) + cola;
    answer += cola;
  }
}

const getNewCola = (a, b, remainBottle) => {
  if (!remainBottle) return 0;
  return b * parseInt(remainBottle / a);
};

const getRemainBottle = (a, remainBottle) => {
  return remainBottle % a;
};

/* 기능 명세
- [x] 빈 병을 콜라로 교환한다.
- [x] 교환할 수 있는 콜라가 0이고 빈 병이 a보다 작으면 answer를 return한다.
- [x] 콜라를 answer에 가산한다.
- [x] 콜라를 빈 병으로 치환한다.
*/
