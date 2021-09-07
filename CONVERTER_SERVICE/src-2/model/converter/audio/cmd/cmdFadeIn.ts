import { Parameters } from "../../video/parameter/parameters";
import { Command } from "./cmd";
//ffmpeg -i music.mp3 -af "afade=t=out:st=5:d=5" out.mp3
const FFMPEG_FADE_IN = "afade=t=in:st=0:d=5";
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
        if(this.getParameter('fadeOut')) 
            command = command + FFMPEG_AF + SPACE + FFMPEG_FADE_IN + SPACE;      
        return this.cmd.returnCommand(command); 
    };    
}