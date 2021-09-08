import { Command } from "./Command";
import { CommandSchema } from "./CommandSchema";
import { TypeDetector } from "./TypeDetector";

export class Interpreter {
    private commandSchemas: Array<any>;
    private typeDetector: TypeDetector;

    constructor(commandSchemas: Array<any> = []) {
        this.commandSchemas = commandSchemas;
        this.typeDetector = new TypeDetector();
    }

    validateCommandId(command: Command, commandSchema: CommandSchema): boolean {
        return command.getId() === commandSchema.getId();
    }

    validateCommand(command: Command): any {
        let result: string = "";
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
