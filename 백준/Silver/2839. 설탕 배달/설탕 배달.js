const input = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

let sugar = input;
let fiveBag = parseInt(sugar / 5);
let threeBag;
let answer;

while (0 <= fiveBag) {
    const remain = sugar - (fiveBag * 5);
    const dividable = remain % 3 === 0;
    
    if (dividable) {
        threeBag = remain / 3;
        answer = threeBag + fiveBag;
        break;
    }

    answer = -1;
    fiveBag -= 1;
}

console.log(answer);
