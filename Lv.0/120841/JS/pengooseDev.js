function solution(dot) {
  return dot[0] * dot[1] > 0 ? (dot[0] > 0 ? 1 : 3) : dot[0] > 0 ? 4 : 2;
}
