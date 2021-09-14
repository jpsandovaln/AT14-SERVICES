import { Parameters } from "../../parameter/parameters";
import { Vf } from "./vf";

const FFMPEG_VFLIP = ',vflip';

export class CmdVFlip extends Vf {
    public vf!: Vf;
    constructor(parameters: Parameters) { 
        super(parameters);        
    }

    setNextCommand(cmd: Vf):void {
        this.vf = cmd;
    };

    returnCommand(command: string): string {        
        if(this.getParameter('vflip') == 'true') {
            command = command + FFMPEG_VFLIP;                         
        }
        return "" + this.vf.returnCommand(command);
    };    
}
