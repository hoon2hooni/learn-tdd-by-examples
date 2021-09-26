import Dollar from "./dollar";

/**
 * $5+ lOCHF = $10(환율이 2:1일 경우)
 * $5X 2- $10 -- clear
 * amount를 private으로 만들기
 * Dollar 부작용? --clear
 * Money 반올림?
 * equals () --clear
 */

it("$5 X 2 = $10", () => {
  const Five = new Dollar(5);
  const Product = Five.times(2);
  expect(Product.amount).toBe(10);
});

it("Dollar 부작용?", () => {
  const Five = new Dollar(5);
  let Product = Five.times(2);
  Product = Five.times(3);
  expect(Product.amount).toBe(15);
});
/**
 * 삼각 측량법 확인
 * 삼각측량이란 수신국 사이의 거리가 알려져 있고 수신국이 신호의 방향을 알고 있음
 * 이 정보들만으로 충분히 신호의 거리와 방위르 알 수 있다.
 * 삼각측량을 이용하려면 예제가 두 개 이상 있어야만 코드를 일반화 할 수 있다.
 */
it("equal", () => {
  expect(new Dollar(5)).toEqual(new Dollar(5));
  expect(new Dollar(6)).not.toEqual(new Dollar(5));
});
