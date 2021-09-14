import { Parameters } from "../parameter/parameters";
import { Command } from "./cmd";

const FFMPEG_RATIO = "-r";
const SPACE = " ";
const MIN_RATIO = 1;
const MAX_RATIO = 24;

export class CmdRatio extends Command {   
    private cmd!: Command;
    constructor(parameters: Parameters) { 
        super(parameters);        
    }

    setNextCommand(command: Command):void {
        this.cmd = command;
    };

    isValid(ratio: string): boolean {
        let ratioInt = parseInt(ratio, 10);
        if(ratioInt >= MIN_RATIO && ratioInt <= MAX_RATIO && ratioInt != NaN)
            return true;
        else
            return false;
    }

    returnCommand(command: string): string { 
        if(this.isValid(this.getParameter('ratio')))
            command = command + FFMPEG_RATIO + SPACE + this.getParameter('ratio') + SPACE;        
        return this.cmd.returnCommand(command);
    };    
}
