class Franc {
  private _amount: number;
  constructor(amount: number) {
    this._amount = amount;
  }
  times(multiplier: number) {
    return new Franc(this.amount * multiplier);
  }
  public get amount() {
    return this._amount;
  }
  public equals(instance: Franc) {
    return this.amount == instance.amount;
  }
}

export default Franc;
