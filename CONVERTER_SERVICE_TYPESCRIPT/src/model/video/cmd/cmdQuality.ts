import { unwatchFile } from "fs";
import { Parameters } from "../parameter/parameters";
import { Command } from "./cmd";

const FFMPEG_QUALITY = "-qscale";
const SPACE = " ";
const MAX_QUALITY = 31;
const MIN_QUALITY = 0;

export class CmdQuality extends Command {   
    private cmd!: Command;
    constructor(parameters: Parameters) { 
        super(parameters);        
    }

    setNextCommand(command: Command):void {
        this.cmd = command;
    };

    isValid(quality: string | undefined): boolean {
        if(quality != undefined) {
            let qualityInt = parseInt(quality, 10); 
            if(qualityInt >= MIN_QUALITY && MAX_QUALITY <= 31 && qualityInt != NaN)
                return true;
            else
                return false;   
        }
        return false;       
    }

    returnCommand(command: string): string {  
        if(this.isValid(this.getParameter('quality'))) 
            command = command + FFMPEG_QUALITY + SPACE + this.getParameter('quality') + SPACE;      
        return this.cmd.returnCommand(command); 
    };    
}
