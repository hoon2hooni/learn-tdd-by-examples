import Dollar from "./dollar";

/**
 * $5+ lOCHF = $10(환율이 2:1일 경우)
 * $5X 2- $10 -- clear
 * amount를 private으로 만들기
 * Dollar 부작용?
 * Money 반올림?
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
