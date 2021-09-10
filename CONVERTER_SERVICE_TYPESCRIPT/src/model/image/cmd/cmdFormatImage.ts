import { Parameters } from "../../common/parameter/parameters";
import { Command } from "./cmd";

const FFMPEG_I = "-i";
const SPACE = " ";

export class CmdFormatImage extends Command {
    private cmd!: Command;
    constructor(parameters: Parameters) {
        super(parameters);
    }

    setNextCommand(command: Command): void {
        this.cmd = command;
    }

    isValid(format: string | undefined): boolean {
        if ((format = ".mp3" || ".mp2" || ".wma" || ".mp4" || ".wav"))
            return true;
        else return false;
    }

    returnCommand(command: string): string {
        if (this.isValid(this.getParameter("audioFormat")))
            command = command + FFMPEG_I + SPACE;
        return this.cmd.returnCommand(command);
    }
}
