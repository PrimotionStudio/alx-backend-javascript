export default class Car {
  constructor(brand, motor, _color) {
    this._brand = brand;
    this._motor = motor;
    this.color = _color;
  }

  cloneCar() {
    return new Car(this._brand, this._motor, this.color);
  }
}
