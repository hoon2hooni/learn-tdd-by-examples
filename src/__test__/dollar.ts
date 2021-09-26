class Dollar {
  private _amount: number;
  constructor(amount: number) {
    this._amount = amount;
  }
  times(multiplier: number) {
    return new Dollar(this.amount * multiplier);
  }
  public get amount() {
    return this._amount;
  }
}
export default Dollar;
