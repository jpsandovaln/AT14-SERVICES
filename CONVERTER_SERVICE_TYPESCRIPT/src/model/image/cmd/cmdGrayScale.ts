import { Parameters } from "../../common/parameter/parameters";
import { Command } from "./cmd";

const MAGICK_GRAYSCALE = '"-set colorspace Gray -separate"';
const SPACE = " ";
export class CmdGrayScale extends Command {
    private cmd!: Command;
    constructor(parameters: Parameters) {
        super(parameters);
    }

    setNextCommand(command: Command): void {
        this.cmd = command;
    }

    returnCommand(command: string): string {
        if (this.getParameter("grayScale") == "true")
            command = command + SPACE + MAGICK_GRAYSCALE + SPACE;
        return this.cmd.returnCommand(command);
    }
}
