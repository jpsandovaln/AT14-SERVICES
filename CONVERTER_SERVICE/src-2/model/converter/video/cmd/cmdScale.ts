import { Parameters } from "../parameter/parameters";
import { Command } from "./cmd";

const FFMPEG_SCALE = "-s";
const SPACE = " ";
const SCALE_1200 = '1280x720';
const SCALE_854 = '854x480';
const SCALE_640 = '640x360';
const SCALE_426 = '426x240';
const SCALE_256 = '256x144';

export class CmdScale extends Command {   
    private cmd: Command;
    constructor(parameters: Parameters) { 
        super(parameters);        
    }

    setNextCommand(command: Command):void {
        this.cmd = command;
    };

    isValid(scale: string): boolean {
        if(scale == SCALE_1200 || SCALE_854 || SCALE_640 || SCALE_426 || SCALE_256)
            return true;
        else
            return false;
    }

    returnCommand(command: string): string {  
        if(this.isValid(this.getParameter('scale')))
            command = command + FFMPEG_SCALE + SPACE + this.getParameter('scale') + SPACE;        
        return this.cmd.returnCommand(command);       
    };    
}