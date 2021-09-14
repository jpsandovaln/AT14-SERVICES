import { Parameters } from "../parameter/parameters";
import { Command } from "./cmd";

const FFMPEG_VN = "-vn";
const SPACE = " ";

export class CmdAudio extends Command {   
    private cmd!: Command;
    constructor(parameters: Parameters) { 
        super(parameters);        
    }

    setNextCommand(command: Command):void {
        this.cmd = command;
    };

    isValid(format: string): boolean {
        if(format == '.mp3' || '.mp2' || '.wma')
            return true;
        else
            return false;         
    }

    returnCommand(command: string): string {  
        if(this.isValid(this.getParameter('audioFormat')))
            command = command + FFMPEG_VN + SPACE;      
        return this.cmd.returnCommand(command); 
    };    
}
