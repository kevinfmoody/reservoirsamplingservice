class ReservoirManager {
  constructor() {
    this._reservoirs = new Map();
    this._nextId = 0;
  }

  addReservoir(reservoir) {
    const id = this._nextId++;
    this._reservoirs.set(id, reservoir);
    return id;
  }

  getReservoir(id) {
    return this._reservoirs.get(id);
  }

  removeReservoir(id) {
    this._reservoirs.delete(id);
  }
}

module.exports = ReservoirManager;