const IDispenser = require("./IDispense");

class Dispense50Bs extends IDispenser {
    constructor() {
        super();
    }

    set nextChain(dispenseInstance) {
        this._dispenser = dispenseInstance;
    }
    
    dispense(value) {
        if (value >= 50) {
            const num = Math.trunc(value / 50);
            const remainder = value % 50
            console.info("Dispense 50Bs = " + num);
            if (remainder != 0) {
                this._dispenser.dispense(remainder);
            }
        } else {
            this._dispenser.dispense(value);
        }
    }
}

module.exports = Dispense50Bs;
