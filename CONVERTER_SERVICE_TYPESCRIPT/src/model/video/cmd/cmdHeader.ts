import { Parameters } from "../parameter/parameters";
import { Command } from "./cmd";

const FFMPEG_I = " -i ";
const QUOTES = '"';
const SPACE = " ";

export class CmdHeader extends Command {   
    private cmd!: Command;
    private codecPath: string;
    private videoPath: string;
    constructor(parameters: Parameters , codecPath: string, videoPath: string) { 
        super(parameters);  
        this.codecPath = codecPath;
        this.videoPath = videoPath;   
    }
    
    setNextCommand(command: Command):void {
        this.cmd = command;
    };
    
    returnCommand(command: string): string {  
        command = command + this.codecPath + FFMPEG_I + QUOTES + this.videoPath + QUOTES + SPACE;
        return this.cmd.returnCommand(command);       
    };    
}