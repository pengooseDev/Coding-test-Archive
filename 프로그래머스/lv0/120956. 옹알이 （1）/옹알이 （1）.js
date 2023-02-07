function solution(babbling) {
    const soundables = ["aya", "ye", "woo", "ma"];
    
    const res = babbling.map((word) => {
        for (let i of soundables) word = word.replace(i, ' ');
        
        return word.trim();
    })

    console.log(res)
    
    return res.filter((v) => !v).length;
}
