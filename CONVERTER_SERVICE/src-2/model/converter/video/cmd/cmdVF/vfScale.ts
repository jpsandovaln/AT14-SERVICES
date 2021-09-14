import { Parameters } from "../../parameter/parameters";
import { Vf } from "./vf";

const FFMPEG_SCALE = "scale=";

export class CmdScale extends Vf {   
    private vf: Vf;
    constructor(parameters: Parameters) { 
        super(parameters);        
    }

    setNextCommand(cmd: Vf):void {
        this.vf = cmd;
    };

    isValid(scale: string): boolean {
        let scaleInt = parseInt(scale, 10);
        if(scaleInt >=256 && scaleInt <= 1280 && scaleInt != NaN)
            return true;
        else
            return false;
    }

    returnCommand(command: string): string {  
        if(this.isValid(this.getParameter('frameScale')))
            command = command + FFMPEG_SCALE + this.getParameter('frameScale') + ':-1';        
        return "" + this.vf.returnCommand(command);       
    };    
}