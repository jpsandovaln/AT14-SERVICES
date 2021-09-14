import { Parameters } from "../../common/parameter/parameters";
import { Command } from "./cmd";

const QUOTES = '"';
const DEFAULT_FORMAT = '.png'
export class CmdFooterFrames extends Command {
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
        if (this.getParameter('outputFormatFrames') != undefined) {
            command = command + QUOTES + this.outputPath + this.resultName + this.getParameter('outputFormatFrames') + QUOTES;
        }
        else {
            command = command + QUOTES + this.outputPath + this.resultName + DEFAULT_FORMAT + QUOTES;
        }
        return command;
    };
}
