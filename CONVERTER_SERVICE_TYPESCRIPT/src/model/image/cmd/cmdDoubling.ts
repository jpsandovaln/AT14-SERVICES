import { Parameters } from "../../common/parameter/parameters";
import { Limits } from "./validations/limits";
import { Types } from "./validations/tpyes";
import { Command } from "./cmd";
export class CmdDoubling extends Command {
    private MAGICK_DOUBLING = "-liquid-rescale";
    private SPACE = " ";
    private cmd!: Command;
    private limit;
    private type;

    constructor(parameters: Parameters) {
        super(parameters);
        this.limit = new Limits(1, 500);
        this.type = new Types();
    }

    setNextCommand(command: Command): void {
        this.cmd = command;
    }

    isValid(value: string) {
        let parameter = this.getParameter(value);

        if (this.type.isNumber(parameter)) {
            if (this.limit.isValid(parameter) && this.type.isNumber(parameter))
                return true;
            else return false;
        }
    }

    returnCommand(command: string): string {
        if (this.isValid("doubling"))
            command = command + this.SPACE + this.MAGICK_DOUBLING + this.SPACE;
        return this.cmd.returnCommand(command);
    }
}
