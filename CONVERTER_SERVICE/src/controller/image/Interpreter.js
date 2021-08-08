const Command = require('./Command.js');
const CommandSchema = require('./CommandSchema.js');
const TypeDetector = require("./TypeDetector.js");

class Interpreter {

    //Execution

    constructor(commandSchemas = []) {

        this.commandSchemas = commandSchemas;
        this.typeDetector = new TypeDetector;
    }

    //Functions

    validateCommandId(command = new Command, commandSchema = new CommandSchema) {

        return command.getId() === commandSchema.getId();
    }

    validateCommand(command = new Command) {

        let result;

        this.commandSchemas.forEach(commandSchema => {

            if (this.validateCommandId(command, commandSchema)) {

                if (this.typeDetector.detectType(command.getValue())) {
                    result = commandSchema.getCommand();
                }
            }
        })

        return result;
    }
}

module.exports = Interpreter;