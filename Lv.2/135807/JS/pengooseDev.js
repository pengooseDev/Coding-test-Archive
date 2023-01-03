function solution(arrayA, arrayB) {
  var answer = 0;

  let AGCD = arrayA[0];
  for (let i = 1; i <= arrayA.length - 1; i++) {
    AGCD = getGCD(AGCD, arrayA[i]);
  }

  let BGCD = arrayB[0];
  for (let i = 1; i <= arrayB.length - 1; i++) {
    BGCD = getGCD(BGCD, arrayB[i]);
  }

  for (let i of arrayA) {
    let dividable = isDividable(i, BGCD);
    if (dividable) {
      BGCD = 0;
      break;
    }
  }

  for (let i of arrayB) {
    let dividable = isDividable(i, AGCD);
    if (dividable) {
      AGCD = 0;
      break;
    }
  }

  answer = Math.max(AGCD, BGCD);

  return answer;
}

const getGCD = (x, y) => (y ? getGCD(y, x % y) : x);

const isDividable = (number, dividor) => {
  const remain = number % dividor;
  if (remain === 0) return true;
  return false;
};

/* 기능명세
Solution - 유클리드 호제법을 이용한 최대 공약수 알고리즘
- [x] A와 B의 GCD를 구한다.
- [x] 각 배열의 가장 큰 값과 반대의 GCD를 비교한다. GCD가 더 크다면, 해당 배열은 나눌 수 없다.
- [x] 상대 패를 나눌 수 있는지 확인한다.
- [x] 하나라도 나눠질 경우, 0을 return한다.
- [x] 전부 나눠지지 않는다면 해당 값을 return한다.
*/
