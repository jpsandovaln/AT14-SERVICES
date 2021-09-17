import { Parameters } from "../../common/parameter/parameters";
import { Command } from "./cmd";

const QUOTES = '"';
const SPACE = " ";
const RESULT_NAME = "%d";
export class CmdFooter extends Command {
    private cmd!: Command;
    private outputPath: string;
    private pdfPath: string;
    constructor(parameters: Parameters, pdfPath: string, outputPath: string) {
        super(parameters);
        this.outputPath = outputPath;
        this.pdfPath = pdfPath;
    }

    setNextCommand(): void { };

    returnCommand(command: string): string {
        command = command + QUOTES + this.pdfPath + QUOTES + SPACE + QUOTES + this.outputPath + RESULT_NAME + this.getParameter('outputFormat') + QUOTES;
        return command;
    };
}
