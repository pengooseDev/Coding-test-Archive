


/* String과 replace 메서드를 이용한 풀이. */
function solution(n, l, r) {
    let answer = 0;
    let cantor = '1';
    for (let _ of new Array(n)) cantor = getNewCantor(cantor);
    cantor.slice(l, r);

    for (let i of Array.from(cantor)) i === '1' ? answer++ : "";

    return answer;
}

const getNewCantor = (cantor) => {
    cantor = cantor.replaceAll(BIT.ZERO,CANTOR_SEQUENCE[BIT.ZERO])
    cantor = cantor.replaceAll(BIT.ONE,CANTOR_SEQUENCE[BIT.ONE])
    return cantor;
}

const CANTOR_SEQUENCE = Object.freeze({
    '0': '00000',
    '1': '11011',
})

const BIT = Object.freeze({
    'ZERO': '0',
    'ONE': '1',
})
