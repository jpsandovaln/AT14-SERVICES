class Context {
    constructor(strategies) {
        this._strategies = strategies;
    }

    validate() {
        this._strategies.forEach(strategy => {
            strategy.validate();
        });
    }
}

module.exports = Context;
