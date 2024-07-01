import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  get floors() {
    return this._floors;
  }

  set floors(floor) {
    if (typeof floor !== 'number' || floor < 1 || floor > this._floors) {
      throw new RangeError('Number of floors must be between 1 and the total number of floors');
    }
    this._floors = floor;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
