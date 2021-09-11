import { Parameters } from "../../common/parameter/parameters";
import { Command } from "./cmd";

const MAGICK_MONOCHROME = "-monochrome";
const SPACE = " ";

export class CmdMonochrome extends Command {
    private cmd!: Command;
    constructor(parameters: Parameters) {
        super(parameters);
    }

    setNextCommand(command: Command): void {
        this.cmd = command;
    }

    returnCommand(command: string): string {
        if (this.getParameter("monochrome") == "true")
            command = command + SPACE + MAGICK_MONOCHROME + SPACE;
        return command /*this.cmd.returnCommand(command)*/;
    }
}
let params = new Parameters({ audioFormat: ".jpg", monochrome: "true" });
let cmd = new CmdMonochrome(params);
console.log(cmd.returnCommand("anterior"));
