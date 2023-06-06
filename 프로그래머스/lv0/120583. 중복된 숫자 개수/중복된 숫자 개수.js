function solution(array, n) {
    let answer = 0;
    for (let number of array) number === n ? answer++ : null;
    return answer;
}