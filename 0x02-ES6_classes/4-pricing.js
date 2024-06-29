import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(a) {
    if (typeof a !== 'number' || a < 0) {
      throw new TypeError('Amount must be a positive number');
    }
    this._amount = a;
  }

  get currency() {
    return this._currency;
  }

  set currency(c) {
    if (!(c instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency class');
    }
    this._currency = c;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency._name} (${this._currency._code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Amount and ConversionRate must be Numbers');
    }
  }
}
