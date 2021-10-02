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
}

export default Money;
