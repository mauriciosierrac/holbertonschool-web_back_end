export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building && !(this.evacuationWarningMessage)) {
      throw (Error('Class extending Building must override evacuationWarningMessage'));
    } else if (typeof sqft !== 'number') {
      throw (TypeError('sqft must be integer'));
    } else this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}
