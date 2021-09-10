import { Parameters } from "../../common/parameter/parameters";
import { Command } from "./cmd";

const MAGICK_QUALITY = '"-quality"';
const SPACE = " ";

export class CmdQuality extends Command {
    private cmd!: Command;
    constructor(parameters: Parameters) {
        super(parameters);
    }

    setNextCommand(command: Command): void {
        this.cmd = command;
    }

    returnCommand(command: string): string {
        if (this.getParameter("quality") == "true")
            command = command + SPACE + MAGICK_QUALITY + SPACE;
        return this.cmd.returnCommand(command);
    }
}
