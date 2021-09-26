import Dollar from "./dollar";

/**
 * $5+ lOCHF = $10(환율이 2:1일 경우)
 * $5X 2- $10 -- clear
 * amount를 private으로 만들기
 * Dollar 부작용?
 * Money 반올림?
 */
it("$5 X 2 = $10", () => {
  const dollar = new Dollar(5, 2);
  expect(dollar.times).toBe(10);
});
