import { Parameters } from "../../common/parameter/parameters";
import { Types } from "./validations/tpyes";
import { State } from "./validations/state";
import { Command } from "./cmd";

export class CmdGrayScale extends Command {
    private MAGICK_GRAY_SCALE = "-set colorspace Gray -separate";
    private SPACE = " ";
    private cmd!: Command;
    private type;
    private state;

    constructor(parameters: Parameters) {
        super(parameters);
        this.type = new Types();
        this.state = new State();
    }

    setNextCommand(command: Command): void {
        this.cmd = command;
    }

    isValid(value: string | undefined) {
        if (this.state.isValid(value)) {
            return this.type.isBoolean(value) ? true : false;
        }
    }

    returnCommand(command: string): string {
        let parameter = this.getParameter("grayScale");

        if (this.isValid(parameter))
            command =
                command + this.SPACE + this.MAGICK_GRAY_SCALE + this.SPACE;
        return this.cmd.returnCommand(command);
    }
}
