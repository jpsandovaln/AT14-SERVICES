import { Parameters } from "../../common/parameter/parameters";
import { Command } from "./cmd";

const MAGICK_ROTATE = '"-rotate"';
const SPACE = " ";

export class CmdRotate extends Command {
    private cmd!: Command;
    constructor(parameters: Parameters) {
        super(parameters);
    }

    setNextCommand(command: Command): void {
        this.cmd = command;
    }

    returnCommand(command: string): string {
        if (this.getParameter("rotate") == "true")
            command = command + SPACE + MAGICK_ROTATE + SPACE;
        return this.cmd.returnCommand(command);
    }
}
