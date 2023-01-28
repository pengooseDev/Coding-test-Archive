function solution(num) {
  let count = 0;
  let myNum = num;
  if (myNum === 1) return 0;

  while (count <= 500) {
    console.log(myNum);
    if (myNum === 1) return count;
    if (myNum % 2 === 0) {
      myNum = myNum / 2;
    } else {
      myNum = 3 * myNum + 1;
    }
    count += 1;
  }

  return -1;
}
