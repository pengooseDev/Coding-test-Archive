process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  const [m, n] = data.split(' ');
  const stars = '*'.repeat(m);
  const arr = [];
  for (let i = 0; i < n; i++) arr.push(stars);
  const answer = arr.join('\n');
  console.log(answer);
});
