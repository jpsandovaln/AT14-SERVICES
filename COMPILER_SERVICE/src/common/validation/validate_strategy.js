class ValidateStrategy {

    constructor() {
        if (this.constructor == ValidateStrategy) {
            throw new Error('ValidateStrategy abstract class cannot be instantiated');
        }
    }

    validate() {
        throw new Error('validate() must be implemented');
    }
}

module.exports = ValidateStrategy;
