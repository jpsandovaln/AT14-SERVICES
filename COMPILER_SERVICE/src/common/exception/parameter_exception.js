const CompilerException = require("./compiler_exception");

class ParameterInvalidException extends CompilerException {

    constructor(message, code) {
        super(message, '405', code);
        this.name = 'ParameterInvalidException';
    }
}

module.exports = ParameterInvalidException;
