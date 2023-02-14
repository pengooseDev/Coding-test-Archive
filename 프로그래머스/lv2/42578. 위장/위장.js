function solution(clothes) {
    const myMap = new Map();
    for (let [i, type] of clothes) myMap.set(type, myMap.get(type) + 1 || 1);
    const answer = [...myMap.values()].map((v) => v + 1).reduce((acc, curr) => acc *= curr);
    
    return answer - 1;
}
