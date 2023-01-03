## N개의 최소공배수

### [> Link](https://school.programmers.co.kr/learn/courses/30/lessons/12953)

유클리드 호재법을 이용한 최소공배수 구하기.

## 재귀함수를 통한 최소공배수 구현

#### - 최소공배수(Least Common Multiple)

```js
const getGCD = (x, y) => (y ? getGCD(y, x % y) : x);
const getLCM = (x, y) => (x * y) / getGCD(x, y);
```

#### - 두 개 이상의 수에 대한 최소공배수

```js
//arr:number[];
function solution(arr) {
  let LCM = arr[0];
  for (let i = 1; i <= arr.length - 1; i++) {
    LCM = getLCM(LCM, arr[i]);
  }

  return LCM;
}

const getGCD = (x, y) => (y ? getGCD(y, x % y) : x);
const getLCM = (x, y) => (x * y) / getGCD(x, y);
```
