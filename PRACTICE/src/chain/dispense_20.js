const IDispenser = require("./IDispense");

class Dispense20Bs extends IDispenser {
    constructor() {
        super();
    }

    set nextChain(dispenseInstance) {
        this._dispenser = dispenseInstance;
    }
    
    dispense(value) {
        if (value >= 20) {
            const num = Math.trunc(value / 20);
            const remainder = value % 20
            console.info("Dispense 20Bs = " + num);
            if (remainder != 0) {
                this._dispenser.dispense(remainder);
            }
        } else {
            this._dispenser.dispense(value);
        }
    }
}

module.exports = Dispense20Bs;
