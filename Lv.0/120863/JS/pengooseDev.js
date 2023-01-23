function solution(polynomial) {
  const x = [];
  const num = [];
  const myMap = new Map();

  polynomial.split(' ').forEach((v, i) => {
    if (v[v.length - 1] === 'x')
      myMap.set(
        'x',
        myMap.get('x') + (Number(v.replaceAll('x', '')) || 1) ||
          Number(v.replaceAll('x', '') || 1)
      );
    if (Number(v)) myMap.set('num', myMap.get('num') + Number(v) || Number(v));
  });

  myMap.forEach((value, key) => {
    if (key === 'num') return num.push(value);
    if (key === 'x' && value === 1) return x.push('x');
    return x.push(value + key);
  });

  if (x.length === 0 && num.length === 0) return '0';

  return [...x, ...num].join(' + ');
}
