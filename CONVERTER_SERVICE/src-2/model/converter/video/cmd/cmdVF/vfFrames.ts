import { Parameters } from "../../parameter/parameters";
import { Vf } from "./vf";

const FFMPEG_FPS = ",fps=fps=";
const MINIMUM_TIME = 1;

export class CmdFrames extends Vf {   
    private vf: Vf;
    constructor(parameters: Parameters) { 
        super(parameters);        
    }

    setNextCommand(cmd: Vf):void {
        this.vf = cmd;
    };

    isValid(time: string): boolean {
        let timeInt = parseInt(time, 10);
        if(timeInt >= MINIMUM_TIME && timeInt != NaN)
            return true;
        else
            return false;
    }

    returnCommand(command: string): string {  
        if(this.isValid(this.getParameter('frameScale')))
            command = command + FFMPEG_FPS + this.getParameter('timeBetweenFrames');        
        return "" + this.vf.returnCommand(command);       
    };    
}
