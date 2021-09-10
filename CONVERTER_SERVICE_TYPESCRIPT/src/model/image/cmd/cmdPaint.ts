import { Parameters } from "../../common/parameter/parameters";
import { Command } from "./cmd";

const MAGICK_PAINT = '"-paint"';
const SPACE = " ";

export class CmdPaint extends Command {
    private cmd!: Command;
    constructor(parameters: Parameters) {
        super(parameters);
    }

    setNextCommand(command: Command): void {
        this.cmd = command;
    }

    returnCommand(command: string): string {
        if (this.getParameter("paint") == "true")
            command = command + SPACE + MAGICK_PAINT + SPACE;
        return this.cmd.returnCommand(command);
    }
}
