function solution(name, yearning, photo) {
    const myMap = new Map();    
    for (let i = 0; i < name.length; i++) myMap.set(name[i], yearning[i]);
    return photo.map((arr) => arr.map((pName) => myMap.get(pName) || 0).reduce((acc, curr) => acc + curr));
}