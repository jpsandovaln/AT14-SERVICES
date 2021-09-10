import { Parameters } from "../../common/parameter/parameters";
import { Command } from "./cmd";

const MAGICK_RESIZE = '"-resize"';
const SPACE = " ";

export class CmdResize extends Command {
    private cmd!: Command;
    constructor(parameters: Parameters) {
        super(parameters);
    }

    setNextCommand(command: Command): void {
        this.cmd = command;
    }

    returnCommand(command: string): string {
        if (this.getParameter("resize") == "true")
            command = command + SPACE + MAGICK_RESIZE + SPACE;
        return this.cmd.returnCommand(command);
    }
}
