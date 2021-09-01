const IDispenser = require("./IDispense");

class Dispense100Bs extends IDispenser {
    constructor() {
        super();
    }

    set nextChain(dispenseInstance) {
        this._dispenser = dispenseInstance;
    }

    dispense(value) {
        if (value >= 100) {
            const num = Math.trunc(value / 100);
            const remainder = value % 100
            console.info("Dispense 100Bs = " + num);
            if (remainder != 0) {
                this._dispenser.dispense(remainder);
            }
        } else {
            this._dispenser.dispense(value);
        }
    }
}

module.exports = Dispense100Bs;
