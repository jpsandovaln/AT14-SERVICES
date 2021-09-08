"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandBuilder = void 0;
const Command_1 = require("./Command");
const ImageCommands_1 = require("./ImageCommands");
class CommandBuilder extends ImageCommands_1.ImageCommands {
    constructor(params) {
        super();
        this.createCommand(params);
    }
    createCommand(object) {
        let finalCommand = "";
        for (let property in object) {
            let commandCreator = new Command_1.Command(property, object[property]);
            let result = "";
            result =
                this.interpreter.validateCommand(commandCreator) +
                    commandCreator.getValue();
            finalCommand += result;
        }
        return finalCommand;
    }
}
exports.CommandBuilder = CommandBuilder;
