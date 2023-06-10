const input = require('fs').readFileSync('dev/stdin').toString().split('\n')
const arr = input.map(x => x.split(" "))

for (let i = 1; i < arr.length - 1; i++) {
    let thisArr = arr[i].map(Number)
    let num = thisArr[0]
    let sum = thisArr.reduce((acc, cur) => acc + cur) - num
    let avg = sum / num
    
    let count = 0
    for (let j = 1; j <= num; j++) {
        if (thisArr[j] > avg) count++
    }
    
    let percent = count / num * 100
    console.log(`${percent.toFixed(3)}%`)
}