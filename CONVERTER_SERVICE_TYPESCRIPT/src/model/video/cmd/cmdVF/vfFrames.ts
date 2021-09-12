import { Parameters } from "../../../common/parameter/parameters";
import { Vf } from "./vf";

const FFMPEG_FPS = ",fps=fps=";
const MINIMUM_TIME = 1;
const DEFAULT_VALUE = 1;

export class CmdFrames extends Vf {   
    private vf!: Vf;
    constructor(parameters: Parameters) { 
        super(parameters);        
    }

    setNextCommand(cmd: Vf):void {
        this.vf = cmd;
    };

    isValid(time: string | undefined): boolean {        
        if(time != undefined) {
            let timeInt = parseInt(time, 10);
            if(timeInt >= MINIMUM_TIME && timeInt != NaN)
                return true;
            else
                return false;   
        }
        return false;
    }

    returnCommand(command: string): string {  
        if(this.getParameter('timeBetweenFrames') != undefined) {
            if(this.isValid(this.getParameter('timeBetweenFrames'))) {
                command = command + FFMPEG_FPS + this.getParameter('timeBetweenFrames');        
            } 
        }
        else {
            command = command + FFMPEG_FPS + DEFAULT_VALUE;
        }                   
        return "" + this.vf.returnCommand(command);       
    };    
}
