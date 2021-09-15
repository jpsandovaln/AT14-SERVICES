import morganMiddleware from "../../../middleware/common/morgan";
import { Parameters } from "../../common/parameter/parameters";
import { Command } from "./cmd";

const MAGIC_DENSITY = "-density";
const SPACE = " ";
const MIN_QUALITY = 1;
const MAX_QUALITY = 600;
export class CmdQuality extends Command {
    private cmd!: Command;
    constructor(parameters: Parameters) {
        super(parameters);
    }

    setNextCommand(command: Command): void {
        this.cmd = command;
    };

    isValid(quality: string | undefined): boolean {
        if (quality != undefined) {
            let qualityInt = parseInt(quality, 10);
            if (qualityInt >= MIN_QUALITY && qualityInt <= MAX_QUALITY && qualityInt != NaN)
                return true;
            else
                return false;
        }
        return false;
    }

    returnCommand(command: string): string {
        if (this.isValid(this.getParameter('quality')))
            command = command + MAGIC_DENSITY + SPACE + this.getParameter('quality') + SPACE;
        return this.cmd.returnCommand(command);
    };
}
