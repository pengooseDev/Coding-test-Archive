function solution(s, n) {
  const stringArr = s.split('').map((v) => v.charCodeAt(0));
  const lowerArr = stringArr.map((v) => (97 <= v && v <= 122 ? true : false));

  const charCodeArr = s.split('').map((v) => v.toUpperCase().charCodeAt(0) + n);
  const cha = charCodeArr.map((v) => {
    if (v === 32 + n) return String.fromCharCode(32);
    if (65 <= v && v <= 90) return String.fromCharCode(v);
    return String.fromCharCode(v - 26);
  });

  return res.map((v, i) => (lowerArr[i] ? v.toLowerCase() : v)).join('');
}
