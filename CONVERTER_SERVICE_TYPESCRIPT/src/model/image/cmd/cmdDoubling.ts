import { Parameters } from "../../common/parameter/parameters";
import { Command } from "./cmd";
export class CmdFadeOut extends Command {
    private MAGICK_DOUBLING = '"-liquid-rescale"';
    private SPACE = " ";
    private cmd!: Command;

    constructor(parameters: Parameters) {
        super(parameters);
    }

    setNextCommand(command: Command): void {
        this.cmd = command;
    }

    returnCommand(command: string): string {
        if (this.getParameter("doubling") == "true")
            command = command + this.SPACE + this.MAGICK_DOUBLING + this.SPACE;
        return this.cmd.returnCommand(command);
    }
}
