"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Interpreter = void 0;
const TypeDetector_1 = require("./TypeDetector");
class Interpreter {
    constructor(commandSchemas = []) {
        this.commandSchemas = commandSchemas;
        this.typeDetector = new TypeDetector_1.TypeDetector();
    }
    validateCommandId(command, commandSchema) {
        return command.getId() === commandSchema.getId();
    }
    validateCommand(command) {
        let result = "";
        this.commandSchemas.forEach((commandSchema) => {
            if (this.validateCommandId(command, commandSchema)) {
                if (this.typeDetector.detectType(command.getValue())) {
                    result = commandSchema.getCommand();
                }
            }
        });
        return result;
    }
}
exports.Interpreter = Interpreter;
