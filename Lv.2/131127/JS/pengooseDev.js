function solution(want, number, discount) {
  const wantMap = new Map();
  let answer = 0;
  for (let i = 0; i <= number.length - 1; i++) wantMap.set(want[i], number[i]);
  for (let i = 0; i <= discount.length - 10; i++) {
    let copyWantsMap = new Map(wantMap);
    let stuffsMap = new Map();
    let isEqual = true;

    const stuffs = [...discount].slice(i, i + 10);
    for (let j of stuffs) {
      stuffsMap.set(j, stuffsMap.get(j) + 1 || 1);
    }

    stuffsMap.forEach((value, key) => {
      if (copyWantsMap.get(key) !== value) isEqual = false;
    });

    if (isEqual) answer += 1;
  }

  return answer;
}
