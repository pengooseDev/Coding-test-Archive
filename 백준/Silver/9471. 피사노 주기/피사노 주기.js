const [_, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const getPisano = (n) => {
	let prev = 0, curr = 1, res = 0;
  	
  	for (let i = 0; i < n * n; i++) {
    	let temp = prev;
      prev = curr;
      curr = (temp + curr) % n;
      
        if (prev === 0 && curr === 1) {
            res = i + 1;
            break;
        }
    }
  
  
  return res;
}

let answer = '';
for (let i of input) {
    const [num, m] = i.split(' ').map(Number);

    answer += `${num} ${getPisano(m)}\n`    
}

console.log(answer);