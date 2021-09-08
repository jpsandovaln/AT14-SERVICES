import { Parameters } from "../../parameter/parameters";
import { Vf } from "./vf";

const FFMPEG_TRANSPOSE_90 = "transpose=clock";
const FFMPEG_TRANSPOSE_180 = "transpose=clock,transpose=clock";
const FFMPEG_TRANSPOSE_270 = "transpose=clock,transpose=clock,transpose=clock";

export class CmdRotate extends Vf {
    public vf!: Vf;    
    constructor(parameters: Parameters) { 
        super(parameters);        
    }

    setNextCommand(cmd: Vf):void {
        this.vf = cmd;
    };

    private validate(angle: string | undefined): string {        
        if(angle != undefined) {
            if (angle == "90") return FFMPEG_TRANSPOSE_90;
            else if (angle == "180") return FFMPEG_TRANSPOSE_180;
            else if (angle == "270") return FFMPEG_TRANSPOSE_270;
            else return "";    
        }
        return "";        
    }        

    returnCommand(command: string): string {        
        command = command + this.validate(this.getParameter('angle'));
        return "" + this.vf.returnCommand(command);
    };    
}
