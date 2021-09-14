import { Parameters } from "../../common/parameter/parameters";
import { Limits } from "./validations/limits";
import { Types } from "./validations/tpyes";
import { Command } from "./cmd";

export class CmdPaint extends Command {
    private MAGICK_PAINT = "-paint";
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

    isValid(value: string | undefined) {
        if (this.type.isNumber(value)) {
            return this.limit.isValid(value) ? true : false;
        }
    }
    returnCommand(command: string): string {
        let parameter = this.getParameter("paint");

        if (this.isValid(parameter))
            command =
                command +
                this.SPACE +
                this.MAGICK_PAINT +
                this.SPACE +
                parameter +
                this.SPACE;
        return this.cmd.returnCommand(command);
    }
}
