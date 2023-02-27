function solution(record) {
    const myMap = new Map();
    const res = record.map((v) => {
        const [type, uid, nickName] = v.split(' ');
        if(!!nickName) myMap.set(uid, nickName);
        
        return [type, uid, nickName];
    }).map(([type, uid, nickName]) => {
        if(type === 'Enter') return `${myMap.get(uid)}님이 들어왔습니다.`;
        if(type === 'Leave') return `${myMap.get(uid)}님이 나갔습니다.`;
        return;
    }).filter((v) => v);
    
    return res;
}