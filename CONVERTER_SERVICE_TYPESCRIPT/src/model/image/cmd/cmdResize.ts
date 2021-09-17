import { Parameters } from "../../common/parameter/parameters";
import { Limits } from "./validations/limits";
import { Types } from "./validations/tpyes";
import { Command } from "./cmd";

export class CmdResize extends Command {
    private MAGICK_RESIZE = "-resize";
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
            if (this.limit.isValid(value)) return true;
            else return false;
        }
    }

    returnCommand(command: string): string {
        let parameter = this.getParameter("resize");

        if (this.isValid(parameter))
            command =
                command +
                this.SPACE +
                this.MAGICK_RESIZE +
                this.SPACE +
                parameter +
                this.SPACE;
        return this.cmd.returnCommand(command);
    }
}
