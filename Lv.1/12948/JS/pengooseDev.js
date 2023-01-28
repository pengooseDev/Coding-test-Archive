function solution(phone_number) {
  const number = phone_number.slice(-4, phone_number.length);
  const answer = '*'.repeat(phone_number.length - 4) + number;
  return answer;
}
