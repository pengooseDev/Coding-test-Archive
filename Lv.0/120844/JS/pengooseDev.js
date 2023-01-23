function solution(numbers, direction) {
  return direction[0] === 'r'
    ? [numbers.pop(), ...numbers]
    : [...numbers.splice(1, numbers.length - 1), numbers.shift()];
}
