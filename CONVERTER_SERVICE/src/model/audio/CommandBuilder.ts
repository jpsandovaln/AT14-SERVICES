import { Command } from "./Command";
import { AudioCommands } from "./AudioCommands";

export class CommandBuilder extends AudioCommands {
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