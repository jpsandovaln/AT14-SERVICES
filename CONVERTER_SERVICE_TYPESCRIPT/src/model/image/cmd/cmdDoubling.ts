import { Parameters } from "../../common/parameter/parameters";
import { Command } from "./cmd";

const MAGICK_DOUBLING = '"-liquid-rescale"';
const SPACE = " ";

export class CmdFadeOut extends Command {
    private cmd!: Command;
    constructor(parameters: Parameters) {
        super(parameters);
    }

    setNextCommand(command: Command): void {
        this.cmd = command;
    }

    returnCommand(command: string): string {
        if (this.getParameter("doubling") == "true")
            command = command + SPACE + MAGICK_DOUBLING + SPACE;
        return this.cmd.returnCommand(command);
    }
}
