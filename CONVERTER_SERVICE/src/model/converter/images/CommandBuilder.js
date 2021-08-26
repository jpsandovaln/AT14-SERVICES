const Command = require("./Command.js");
const ImageCommands = require("./ImageCommands.js");

class CommandBuilder extends ImageCommands {

    constructor(params = {}) {
        super()
        this.params = params;
        this.createCommand(params);
    }

    createCommand(object = {}) {

        let finalCommand = '';

        for (let property in object) {

            let commandCreator = new Command(property, object[property])
            let result = '';

            result = this.interpreter.validateCommand(commandCreator) + commandCreator.getValue();
            finalCommand += result;
        }
        return finalCommand;
    }
}

module.exports = CommandBuilder;
