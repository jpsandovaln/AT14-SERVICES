import { Parameters } from "../../common/parameter/parameters";
import { Command } from "./cmd";

const FFMPEG_VN = "-vn";
const SPACE = " ";
export class CmdAudio extends Command {
    private cmd!: Command;
    constructor(parameters: Parameters) {
        super(parameters);
    }

    setNextCommand(command: Command): void {
        this.cmd = command;
    };   

    returnCommand(command: string): string {
        command = command + FFMPEG_VN + SPACE;
        return this.cmd.returnCommand(command);
    };
}