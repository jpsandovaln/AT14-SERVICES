import { Parameters } from "../../common/parameter/parameters";
import { Command } from "./cmd";

const MAGICK_MONOCHROME = '"-monochrome"';
const SPACE = " ";

export class CmdMonochrome extends Command {
    private cmd!: Command;
    constructor(parameters: Parameters) {
        super(parameters);
    }

    setNextCommand(command: Command): void {
        this.cmd = command;
    }

    returnCommand(command: string): string {
        if (this.getParameter("monochrome") == "true")
            command = command + SPACE + MAGICK_MONOCHROME + SPACE;
        return this.cmd.returnCommand(command);
    }
}
