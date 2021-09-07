import { Parameters } from "../../video/parameter/parameters";
import { Command } from "./cmd";

const FFMPEG_I = " -i ";
const QUOTES = '"';
const SPACE = " ";

export class CmdHeader extends Command {   
    private cmd!: Command;
    private codecPath: string;
    private audioPath: string;
    constructor(parameters: Parameters , codecPath: string, audioPath: string) { 
        super(parameters);  
        this.codecPath = codecPath;
        this.audioPath = audioPath;   
    }
    
    setNextCommand(command: Command):void {
        this.cmd = command;
    };
    
    returnCommand(command: string): string {  
        command = command + this.codecPath + FFMPEG_I + QUOTES + this.audioPath + QUOTES + SPACE;
        return this.cmd.returnCommand(command);       
    };    
}