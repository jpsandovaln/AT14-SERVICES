class IDispenser {
    constructor() {
        if (this.constructor == IDispenser) {
            throw new Error('IDispenser abstract class cannot be instantiated');
        }
    }

    set nextChain(nextChain) {
        throw new Error('nextChain() must be implemented');
    }

    dispense(value) {
        throw new Error('dispense() must be implemented');
    }
}

module.exports = IDispenser;
