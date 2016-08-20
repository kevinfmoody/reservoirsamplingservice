class Reservoir {
  constructor(elements) {
    this._id;
    this._elements = elements;
    this._numElementsSeen = elements.length;
  }

  setId(id) {
    this._id = id;
  }

  addElement(element) {
    this._numElementsSeen++;
    const i = Math.floor(Math.random() * this._numElementsSeen);
    if (i < this._elements.length) {
      this._elements[i] = element;
    }
  }

  toJSON() {
    return {
      id: this._id,
      elements: this._elements
    };
  }
}

module.exports = Reservoir;