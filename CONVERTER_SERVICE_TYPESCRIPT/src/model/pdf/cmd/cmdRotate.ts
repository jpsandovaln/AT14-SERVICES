import { Parameters } from "../../common/parameter/parameters";
import { Command } from "./cmd";

const MAGIC_ROTATE = "-rotate";
const SPACE = " ";
const ROTATE_90 = 90;
const ROTATE_180 = 180;
const ROTATE_270 = 270;
export class CmdRotate extends Command {
    private cmd!: Command;
    constructor(parameters: Parameters) {
        super(parameters);
    }

    setNextCommand(command: Command): void {
        this.cmd = command;
    };

    isValid(rotate: string | undefined): boolean {
        if (rotate != undefined) {
            let rotateInt = parseInt(rotate, 10);
            if (rotateInt == ROTATE_90 || rotateInt == ROTATE_180 || rotateInt == ROTATE_270)
                return true;
            else
                return false;
        }
        return false;
    }

    returnCommand(command: string): string {
        if (this.isValid(this.getParameter('rotation')))
            command = command + MAGIC_ROTATE + SPACE + this.getParameter('rotation') + SPACE;
        return this.cmd.returnCommand(command);
    };
}
