function solution(chicken) {
  let coupon = chicken;
  let service = 0;

  while (parseInt(coupon / 10) !== 0) {
    const couponChicken = parseInt(coupon / 10);
    service += couponChicken;
    coupon -= couponChicken * 10;
    coupon += couponChicken;
  }

  return service;
}
