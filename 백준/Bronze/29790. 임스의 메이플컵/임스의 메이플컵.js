const [N, U, L] = require("fs").readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);
if (N >= 1000 && (U >= 8000 || L >= 260)) {
    console.log("Very Good");
} else if (N >= 1000) {
    console.log("Good");
} else {
    console.log("Bad");
}