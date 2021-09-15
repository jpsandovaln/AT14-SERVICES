import morganMiddleware from "../../../middleware/common/morgan";
import { Parameters } from "../../common/parameter/parameters";
import { Command } from "./cmd";

const MAGIC_PAINT_EFFECT = "-paint";
const SPACE = " ";
const MIN_EFFECT = 0;
const MAX_EFFECT = 5;
export class CmdEffect extends Command {
    private cmd!: Command;
    constructor(parameters: Parameters) {
        super(parameters);
    }

    setNextCommand(command: Command): void {
        this.cmd = command;
    };

    isValid(effect: string | undefined): boolean {
        if (effect != undefined) {
            let effectInt = parseInt(effect, 10);
            if (effectInt >= MIN_EFFECT && effectInt <= MAX_EFFECT && effectInt != NaN)
                return true;
            else
                return false;
        }
        return false;
    }

    returnCommand(command: string): string {
        if (this.isValid(this.getParameter('paintEffect')))
            command = command + MAGIC_PAINT_EFFECT + SPACE + this.getParameter('paintEffect') + SPACE;
        return this.cmd.returnCommand(command);
    };
}
