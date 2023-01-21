const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input = line.split(' ');
}).on('close', function () {
  const n = Number(input[0]);
  const queue = ['*'];
  for (let i = 2; i <= n; i++) queue.push('*'.repeat(i));

  const answer = queue.join(' \n');
  console.log(answer);
});
