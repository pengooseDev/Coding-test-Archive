function solution(n, arr1, arr2) {
  const map1 = getMyMap(arr1);
  const map2 = getMyMap(arr2);
  const answer = new Array(arr1.length).fill('').map((_, i) => {
    return new Array(map1[i].length)
      .fill('')
      .map((_, j) => {
        return (
          map1[i].split('')[j].replaceAll(' ', '') ||
          map2[i].split('')[j].replaceAll(' ', '')
        );
      })
      .map((v) => (v ? v : ' '))
      .join('');
  });

  return answer;
}

const getMyMap = (arr) => {
  console.log(arr);
  return arr
    .map((v) => v.toString(2))
    .map((v) =>
      v.length !== arr.length ? '0'.repeat(arr.length - v.length) + v : v
    )
    .map((v) => v.replaceAll('0', ' '))
    .map((v) => v.replaceAll('1', '#'));
};
