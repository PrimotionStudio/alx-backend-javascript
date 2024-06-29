export default class Car {
  constructor(brand, motor, _color) {
    this._brand = brand;
    this._motor = motor;
    this._color = _color;
  }

  get brand() {
    return this._brand;
  }

  set brand(b) {
    if (typeof b !== 'string') {
      throw new TypeError('Brand must be a string');
    }
    this._brand = b;
  }

  get motor() {
    return this._motor;
  }

  set motor(m) {
    if (typeof m !== 'number') {
      throw new TypeError('Motor must be a number');
    }
    this._motor = m;
  }

  get color() {
    return this._color;
  }

  set color(c) {
    if (typeof c !== 'string') {
      throw new TypeError('Color must be a string');
    }
    this._color = c;
  }

  cloneCar() {
    return new this.constructor();
  }
}
