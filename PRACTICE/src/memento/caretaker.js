class CareTaker {
    constructor() {
        this._pcMap = new Map();
    }

    addComputer(key, memento) {
        this._pcMap.set(key, memento);
    }

    getComputer(key) {
        return this._pcMap.get(key);
    }
}

module.exports = CareTaker;
