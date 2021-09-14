import { Parameters } from "../../common/parameter/parameters";
import { Command } from "./cmd";

const FFMPEG_SCALE = "-s";
const SPACE = " ";
const SCALE_1200 = '1280x720';
const SCALE_854 = '854x480';
const SCALE_640 = '640x360';
const SCALE_426 = '426x240';
const SCALE_256 = '256x144';
export class CmdScale extends Command {
    private cmd!: Command;
    constructor(parameters: Parameters) {
        super(parameters);
    }

    setNextCommand(command: Command): void {
        this.cmd = command;
    };

    isValid(scale: string | undefined): boolean {
        if (scale != undefined) {
            if (scale == SCALE_1200 || scale == SCALE_854 || scale == SCALE_640 || scale == SCALE_426 || scale == SCALE_256)
                return true;
            else
                return false;
        }
        return false;
    }

    returnCommand(command: string): string {
        if (this.isValid(this.getParameter('scale')))
            command = command + FFMPEG_SCALE + SPACE + this.getParameter('scale') + SPACE;
        return this.cmd.returnCommand(command);
    };
}
