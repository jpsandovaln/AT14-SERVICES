import { Parameters } from "../../common/parameter/parameters";
import { VCmdFormatImage } from "./validations/cmdFormatImageValidation";
import Logger from "../../../utilities/logger";
import { Command } from "./cmd";

const FFMPEG_I = "-i";
const SPACE = " ";
const validations = new VCmdFormatImage();

export class CmdFormatImage extends Command {
    private cmd!: Command;
    constructor(parameters: Parameters) {
        super(parameters);
    }

    setNextCommand(command: Command): void {
        this.cmd = command;
    }

    returnCommand(command: string): string {
        let errorMessage = "";
        if (validations.validateFormat(this.getParameter("imageFormat")))
            command = command + FFMPEG_I + SPACE;
        else Logger.error("");
        return this.cmd.returnCommand(command);
    }
}
