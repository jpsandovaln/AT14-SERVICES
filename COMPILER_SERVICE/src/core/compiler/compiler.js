const Execute = require("../execute/execute");

class Compiler {
    constructor() {
        if (this.constructor == Compiler) {
            throw new Error('Compiler abstract class cannot be instantiated');
        }
        this._execute = new Execute();
    }

    get execute() {
        return this._execute;
    }

    compiler() {
        throw new Error('compiler() must be implementrd');
    }
}

module.exports = Compiler;
