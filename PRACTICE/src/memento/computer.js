const Memento = require("./memento");

class Computer {

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

    toString() {
        console.info('COMPUTER');
        console.info('Op: ' + this._op);
        console.info('Memory: ' + this._memory);
        console.info('Hdd: ' + this._hdd);
    }

    backup() {
        return new Memento(this._op, this._memory, this._hdd);
    }

    restore(memento) {
        this._op = memento.op;
        this._memory = memento.memory;
        this._hdd = memento.hdd;
    }
}

module.exports = Computer;
