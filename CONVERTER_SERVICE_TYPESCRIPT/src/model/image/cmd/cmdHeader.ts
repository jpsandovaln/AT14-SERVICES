import { Parameters } from "../../common/parameter/parameters";
import { Command } from "./cmd";

const FFMPEG_I = " -i ";
const QUOTES = '"';
const SPACE = " ";

export class CmdHeader extends Command {
    private cmd!: Command;
    private codecPath: string;
    private imagePath: string;
    constructor(parameters: Parameters, codecPath: string, imagePath: string) {
        super(parameters);
        this.codecPath = codecPath;
        this.imagePath = imagePath;
    }

    setNextCommand(command: Command): void {
        this.cmd = command;
    }

    returnCommand(command: string): string {
        command =
            command +
            this.codecPath +
            FFMPEG_I +
            QUOTES +
            this.imagePath +
            QUOTES +
            SPACE;
        return this.cmd.returnCommand(command);
    }
}
