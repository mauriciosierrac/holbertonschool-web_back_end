export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](check) {
    if (check === 'string') return this._location;
    return this._size;
  }
}
