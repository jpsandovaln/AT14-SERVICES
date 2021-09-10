import { Parameters } from "../../common/parameter/parameters";
import { Command } from "./cmd";

const FFMPEG_FADE_IN = '"afade=t=in:st=0:d=5"';
const SPACE = " ";
const FFMPEG_AF = "-af";

export class CmdFadeIn extends Command {   
    private cmd!: Command;
    constructor(parameters: Parameters) { 
        super(parameters);        
    };

    setNextCommand(command: Command):void {
        this.cmd = command;
    };

    returnCommand(command: string): string {  
        if(this.getParameter('fadeIn')== 'true') 
            command = command + FFMPEG_AF + SPACE + FFMPEG_FADE_IN + SPACE;      
        return this.cmd.returnCommand(command); 
    };    
}