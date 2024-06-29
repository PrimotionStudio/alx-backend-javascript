export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(c) {
    if (typeof c !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = c;
  }

  get name() {
    return this._name;
  }

  set name(n) {
    if (typeof n !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = n;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
