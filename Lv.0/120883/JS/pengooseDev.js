function solution(id_pw, db) {
  let answer = '';
  const [id, pw] = id_pw;

  for (let i of db) {
    const [DBid, DBpw] = i;
    id === DBid
      ? pw === DBpw
        ? (answer = 'login')
        : (answer = 'wrong pw')
      : (answer = 'fail');
    if (answer !== 'fail') return answer;
  }

  return answer;
}
