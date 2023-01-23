function solution(spell, dic) {
  const result = dic.map((v, i) => {
    let mySpell = [...spell].join('');
    for (i of v) mySpell = mySpell.replace(i, '1');
    return mySpell;
  });

  return result.filter((v) => Number(v)).length ? 1 : 2;
}
