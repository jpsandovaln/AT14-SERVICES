import { Command } from "./Command";
import { ImageCommands } from "./ImageCommands";

export class CommandBuilder extends ImageCommands {
    constructor(params: object) {
        super();
        this.createCommand(params);
    }

    public createCommand(object: any): string {
        let finalCommand: string = "";

        for (let property in object) {
            let commandCreator = new Command(property, object[property]);
            let result = "";

            result =
                this.interpreter.validateCommand(commandCreator) +
                commandCreator.getValue();
            finalCommand += result;
        }
        return finalCommand;
    }
}
