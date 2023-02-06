function solution(s) {
    const myArr = s.match(/-?[0-9]+/g).map((v) => Number(v)).sort((a, b) => a - b);
    
    return String(myArr[0]) + " " + String(myArr.at(-1));
}