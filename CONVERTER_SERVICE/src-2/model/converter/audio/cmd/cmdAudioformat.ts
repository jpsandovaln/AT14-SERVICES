import { Parameters } from "../../video/parameter/parameters"
import { Command } from "./cmd";

const FFMPEG_I = "-i";
const SPACE = " ";

export class CmdAudioFormat extends Command {   
    private cmd!: Command;
    constructor(parameters: Parameters) { 
        super(parameters);        
    }

    setNextCommand(command: Command):void {
        this.cmd = command;
    };

    isValid(format: string): boolean {
        if(format == '.mp3' || '.mp2' || '.wma' || '.mp4' || '.wav')
            return true;
        else
            return false;         
    }

    returnCommand(command: string): string {  
        this.isValid(this.getParameter('audioFormat'))
        return "" + this.cmd.returnCommand(command); 
    };    
}
