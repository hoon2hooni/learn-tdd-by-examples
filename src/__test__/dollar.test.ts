import Dollar from "./dollar";

/**
 * $5+ lOCHF = $10(환율이 2:1일 경우)
 * $5X 2- $10 -- clear
 * amount를 private으로 만들기 --clear
 * Dollar 부작용? --clear
 * Money 반올림?
 * equals () --clear
 */

/**
 * 삼각 측량법 확인
 * 삼각측량이란 수신국 사이의 거리가 알려져 있고 수신국이 신호의 방향을 알고 있음
 * 이 정보들만으로 충분히 신호의 거리와 방위르 알 수 있다.
 * 삼각측량을 이용하려면 예제가 두 개 이상 있어야만 코드를 일반화 할 수 있다.
 */
it("test equality", () => {
  expect(new Dollar(5)).toEqual(new Dollar(5));
  expect(new Dollar(6)).not.toEqual(new Dollar(5));
});

it("test Multiplication", () => {
  const five = new Dollar(5);
  expect(new Dollar(10)).toEqual(five.times(2));
  expect(new Dollar(15)).toEqual(five.times(3));
});
