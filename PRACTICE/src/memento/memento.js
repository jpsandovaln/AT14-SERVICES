class Memento {

    constructor(op, memory, hdd) {
        this._op = op;
        this._memory = memory;
        this._hdd = hdd; 
    }

    get op() {
        return this._op;
    }

    set op(value) {
        this._op = value;
    }

    get memory() {
        return this._memory;
    }

    set memory(value) {
        this._memory = value;
    }

    get hdd() {
        return this._hdd;
    }

    set hdd(value) {
        this._hdd = value;
    }
}

module.exports = Memento;
