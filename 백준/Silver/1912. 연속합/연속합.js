const [_, input] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const nums = input.split(' ').map(Number);
const max = Math.max(...nums);
if (max < 0) console.log(max);
if (max >= 0) {
    const cache = [nums[0]];

    for (let i = 1; i <= nums.length - 1; i++) {
        
        if (cache[i - 1] + nums[i] <= 0) {
            cache[i] = 0;
            continue;
        }

        cache[i] = cache[i - 1] + nums[i];
    }
    console.log(Math.max(...cache));
}