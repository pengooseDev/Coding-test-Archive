function solution(cards1, cards2, goal) {
    let answer = true;
    
    checker: while (goal.length !== 0) {
        const target = goal.shift();
        if (target === cards1[0]) {
            cards1.shift();
            continue;
        };

        if (target === cards2[0]) {
            cards2.shift();
            continue;
        };
        
        answer = false;
        break checker;
    }
    
    return answer ? "Yes" : "No";
}