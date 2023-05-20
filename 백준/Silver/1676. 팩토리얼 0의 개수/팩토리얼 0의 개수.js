let input = parseInt(require("fs").readFileSync("/dev/stdin").toString().trim());
let answer = 0;

for (let i = 1; i <= input; i++) {
    let curr = i;
    while (!(curr % 5)){
        answer++;
        curr /= 5; 
    }
}; 

console.log(answer);