import { Parameters } from "../../common/parameter/parameters";
import { Command } from "./cmd";

const QUOTES = '"';
const DEFAULT_FORMAT = ".mp3";
export class CmdFooterAudio extends Command {
    private cmd!: Command;
    private outputPath: string;
    private resultName: string;
    constructor(parameters: Parameters, outputPath: string, resultName: string) {
        super(parameters);
        this.outputPath = outputPath;
        this.resultName = resultName;
    }

    setNextCommand(): void { };

    isValid(format: string | undefined): boolean {
        if (format == '.mp3' || format == '.mp2' || format == '.wma')
            return true;
        else
            return false;
    }

    returnCommand(command: string): string {
        if(this.isValid(this.getParameter('audioFormat')))
            command = command + QUOTES + this.outputPath + this.resultName + this.getParameter('audioFormat') + QUOTES;
        else
            command = command + QUOTES + this.outputPath + this.resultName + DEFAULT_FORMAT + QUOTES;
        return command;
    };
}
