import { Parameters } from "../../common/parameter/parameters";
import { Command } from "./cmd";

const QUOTES = '"';
const SPACE = " ";
export class CmdFooter extends Command {
    private cmd!: Command;
    private outputPath: string;
    private resultName: string;
    constructor(parameters: Parameters, outputPath: string, resultName: string) {
        super(parameters);
        this.outputPath = outputPath;
        this.resultName = resultName;
    }

    setNextCommand(): void { };

    returnCommand(command: string): string {
        command = command + QUOTES + this.outputPath + this.resultName + this.getParameter('outputFormat') + QUOTES;
        return command;
    };
}
