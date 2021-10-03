class Money {
  protected _amount: number;
  constructor(amount: number) {
    this._amount = amount;
  }
  get amount() {
    return this._amount;
  }

  public equals(instance: Money): boolean {
    return this.amount === instance.amount;
  }

  static dollar(amount: number) {
    return new Dollar(amount);
  }

  static franc(amount: number) {
    return new Franc(amount);
  }
}

class Franc extends Money {
  times(multiplier: number) {
    return new Franc(this.amount * multiplier);
  }
}

export default Franc;
