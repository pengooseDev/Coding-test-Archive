function solution(A, B) {
  let answer = 0;
  let myArr = A.split('');
  for (let _ of new Array(A.length)) {
    if (myArr.join('') === B) return answer;
    myArr = [myArr.pop(), ...myArr];
    answer += 1;
  }

  return -1;
}
