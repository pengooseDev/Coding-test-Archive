function solution(genres, plays) {
    const answer = [];
    const myMap = new Map();
    for (let i = 0; i <= genres.length - 1; i++) {
        const curr = myMap.get(genres[i]) ? { totalPlay: myMap.get(genres[i]).totalPlay + plays[i], info: [...myMap.get(genres[i]).info, { id: i, amount: plays[i] }] } : { totalPlay: plays[i], info: [{ id: i, amount: plays[i] }] };
        myMap.set(genres[i], curr);
    }
    
    const sortedMap = [...myMap].sort((a, b) =>  b[1].totalPlay - a[1].totalPlay);
    for (let i of sortedMap) {
        const [id, amount] = i[1].info;
        const target = [...i[1].info].sort((a, b) => b.amount - a.amount).splice(0, 2).map((v) => v.id);
        answer.push(...target)
    }
    return answer;
    
}