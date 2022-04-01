export default class Currency {
  constructor(code, name) {
    this._name = name;
    this._code = code;
  }

  // _name
  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(val) {
    if (typeof val !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._code = val;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
