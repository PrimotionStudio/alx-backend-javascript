import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  get range() {
    return this._range;
  }

  set range(r) {
    if (typeof r !== 'string') {
      throw new TypeError('Range must be a string');
    }
    this._range = r;
  }

  cloneCar() {
    return super.cloneCar();
  }
}
