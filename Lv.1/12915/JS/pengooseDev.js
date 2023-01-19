function solution(strings, n) {
  const answer = strings.sort((a, b) => {
    const vias = a.charCodeAt(n) - b.charCodeAt(n);
    if (vias) return vias;
    if (a < b) return -1;
    return 1;
  });

  return answer;
}
