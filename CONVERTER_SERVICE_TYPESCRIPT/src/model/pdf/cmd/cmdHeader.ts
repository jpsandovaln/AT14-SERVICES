import { Parameters } from "../../common/parameter/parameters";
import { Command } from "./cmd";

const QUOTES = '"';
const SPACE = " ";
export class CmdHeader extends Command {
    private cmd!: Command;
    private codecPath: string;
    constructor(parameters: Parameters, codecPath: string) {
        super(parameters);
        this.codecPath = codecPath;
    }

    setNextCommand(command: Command): void {
        this.cmd = command;
    };

    returnCommand(command: string): string {
        command = command + QUOTES + this.codecPath + QUOTES + SPACE;
        return this.cmd.returnCommand(command);
    };
}
