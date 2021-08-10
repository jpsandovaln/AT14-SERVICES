const CompilerException = require("./compiler_exception");

class CommandException extends CompilerException {

    constructor(message, status, code) {
        super(message, status, code);
    }
}

module.exports = CommandException;
