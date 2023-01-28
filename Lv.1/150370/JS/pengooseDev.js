function solution(today, terms, privacies) {
  const termMap = new Map();
  const priArr = [];
  const [todayY, todayM, todayD] = splicer(today);

  /* Set term value */
  for (let i of terms) {
    const [key, value] = splicer(i);
    termMap.set(key, value);
  }

  /* Set PrivacyArr */
  for (let i of privacies) {
    const [year, month, day, method] = splicer(i);
    priArr.push({ year, month, day, method });
  }

  const result = priArr.map((value) => {
    const { method } = value;
    const validDuration = Number(termMap.get(method));
    const validUnit = getValidDate(value, validDuration);
    const isValid = checkValidation(validUnit, { todayY, todayM, todayD });

    return isValid;
  });

  return result.map((v, i) => (!v ? i + 1 : '')).filter((v) => v);
}

const splicer = (text) => {
  return text.match(/([0-9]+)|([a-zA-Z])/g);
};

const getValidDate = (data, validDuration) => {
  let { year, month, day } = data;
  [year, month, day] = [Number(year), Number(month), Number(day)];
  const unit = 12 * 28 * year + (month + validDuration) * 28 + day;

  return unit;
};

const checkValidation = (validUnit, today) => {
  let { todayY: year, todayM: month, todayD: day } = today;
  [year, month, day] = [Number(year), Number(month), Number(day)];
  const todayUnit = 12 * 28 * year + month * 28 + day;

  return validUnit <= todayUnit ? false : true;
};
