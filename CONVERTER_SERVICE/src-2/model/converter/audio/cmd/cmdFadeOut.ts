import { Parameters } from "../../video/parameter/parameters";
import { Command } from "./cmd";

const FFMPEG_FADE_OUT = '"afade=t=out:st=5:d=5"';
const SPACE = " ";
const FFMPEG_AF = "-af";

export class CmdFadeOut extends Command {   
    private cmd!: Command;
    constructor(parameters: Parameters) { 
        super(parameters);        
    }

    setNextCommand(command: Command):void {
        this.cmd = command;
    };

    returnCommand(command: string): string {  
        if(this.getParameter('fadeOut') == 'true') 
            command = command + FFMPEG_AF + SPACE + FFMPEG_FADE_OUT + SPACE;      
        return this.cmd.returnCommand(command); 
    };    
}
