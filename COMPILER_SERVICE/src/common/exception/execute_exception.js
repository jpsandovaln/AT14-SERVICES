const CompilerException = require("./compiler_exception");

class ExecuteException extends CompilerException {

    constructor(message) {
        super(message, '405', 'SAB-9877');
    }
}

module.exports = ExecuteException;
