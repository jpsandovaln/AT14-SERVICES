import { Parameters } from "../../common/parameter/parameters";
import { Types } from "./validations/tpyes";
import { State } from "./validations/state";
import { Command } from "./cmd";

export class CmdMonochrome extends Command {
    private MAGICK_MONOCHROME = "-monochrome";
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
        let parameter = this.getParameter("monochrome");

        if (this.isValid(parameter))
            command =
                command + this.SPACE + this.MAGICK_MONOCHROME + this.SPACE;
        return this.cmd.returnCommand(command);
    }
}
