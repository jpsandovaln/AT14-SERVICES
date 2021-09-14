import { Parameters } from "../parameter/parameters";
import { Command } from "./cmd";

const QUOTES = '"';
const SPACE = " ";

export class CmdFooter extends Command {   
    private cmd!: Command;
    private outputPath: string;
    private resultName: string;
    private resultFormat: string;
    constructor(parameters: Parameters, outputPath: string, resultName: string, resultFormat: string) { 
        super(parameters);  
        this.outputPath = outputPath;
        this.resultName = resultName;    
        this.resultFormat = resultFormat;    
    }
    
    setNextCommand():void { };
    
    returnCommand(command: string): string {  
        command = command + QUOTES + this.outputPath + this.resultName + this.resultFormat + QUOTES;
        return command;       
    };    
}