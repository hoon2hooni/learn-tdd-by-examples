class Dollar {
  private amount: number;
  private multiplier: number;
  constructor(amount: number, multiplier: number) {
    this.amount = amount;
    this.multiplier = multiplier;
  }
  public get times() {
    return this.amount * this.multiplier;
  }
}
export default Dollar;
