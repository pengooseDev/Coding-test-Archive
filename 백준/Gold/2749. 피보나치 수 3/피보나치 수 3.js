const mod = 1000000;

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

const pisano = getPisano(mod);
const input = BigInt(require("fs").readFileSync("/dev/stdin").toString().trim()) % BigInt(pisano);


let n = Number(input % BigInt(pisano));
const fibo = new Array(n + 1).fill(0);
fibo[0] = 0;
fibo[1] = 1;

for (let i = 2; i <= n; i++) {
    fibo[i] = fibo[i - 1] % mod + fibo[i - 2] % mod;
}

console.log(fibo[input] % mod);