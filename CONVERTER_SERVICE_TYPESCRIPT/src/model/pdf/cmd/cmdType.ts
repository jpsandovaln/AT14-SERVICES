import { Parameters } from "../../common/parameter/parameters";
import { Command } from "./cmd";

const SPACE = " ";
export class CmdType extends Command {
    private cmd!: Command;
    constructor(parameters: Parameters) {
        super(parameters);
    }

    setNextCommand(command: Command): void {
        this.cmd = command;
    };

    isValid(type: string | undefined): boolean {
        if (type != undefined) {
            if (type == '-colorspace gray' || type == '-monochrome')
                return true;
            else
                return false;
        }
        return false;
    }

    returnCommand(command: string): string {
        if (this.isValid(this.getParameter('type')))
            command = command + this.getParameter('type') + SPACE;
        return this.cmd.returnCommand(command);
    };
}
