const IDispenser = require("./IDispense");

class Dispense10Bs extends IDispenser {
    constructor() {
        super();
    }

    set nextChain(dispenseInstance) {
        this._dispenser = dispenseInstance;
    }

    dispense(value) {
        if (value >= 10) {
            const num = Math.trunc(value / 10);
            const remainder = value % 10
            console.info("Dispense 10Bs = " + num);
        }
    }
}

module.exports = Dispense10Bs;
