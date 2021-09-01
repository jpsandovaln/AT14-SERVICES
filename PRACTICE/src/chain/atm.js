const Dispense10Bs = require("./dispense_10");
const Dispense100Bs = require("./dispense_100");
const Dispense20Bs = require("./dispense_20");
const Dispense50Bs = require("./dispense_50");

class ATM {
    constructor(value) {
        this._value = value;
    }

    getMoney() {
        /*if (this._value >= 100) {
            const data = new Dispense100Bs();
            this._value = data.dispense(this._value);
        }
        if (this._value >= 50) {
            const data = new Dispense50Bs();
            this._value = data.dispense(this._value);
        }
        if (this._value >= 20) {
            const data = new Dispense20Bs();
            this._value = data.dispense(this._value);
        }
        if (this._value >= 10) {
            const data = new Dispense10Bs()
            this._value = data.dispense(this._value);
        }
        console.info("remainder = " + this._value);*/

        const dispense100 = new Dispense100Bs();
        const dispense50 = new Dispense50Bs();
        const dispense20 = new Dispense20Bs();
        const dispense10 = new Dispense10Bs();

        dispense100.nextChain = dispense50;
        dispense50.nextChain = dispense20;
        dispense20.nextChain = dispense10;

        dispense100.dispense(this._value);
    }
}

module.exports = ATM;
