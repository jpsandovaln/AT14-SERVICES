const Command = require("./Command.js");
const ImageCommands = require("../../model/converter/images/ImageCommands.js");

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
        //Only for testing purposes
        console.log(finalCommand);
    }
}

//Harcoded for testing purposes
new CommandBuilder({ grayScaleImage: true, resizeImage: 'string', qualityImage: 1 });

module.exports = CommandBuilder;
