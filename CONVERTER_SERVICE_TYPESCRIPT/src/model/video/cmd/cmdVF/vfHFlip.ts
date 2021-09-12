import { Parameters } from "../../../common/parameter/parameters";
import { Vf } from "./vf";

const FFMPEG_HFLIP = ',hflip';
export class CmdHFlip extends Vf {
    public vf!: Vf;
    constructor(parameters: Parameters) { 
        super(parameters);        
    }

    setNextCommand(cmd: Vf):void {
        this.vf = cmd;
    };

    returnCommand(command: string): string {        
        if(this.getParameter('hflip') == 'true') {
            command = command + FFMPEG_HFLIP;                         
        }
        return "" + this.vf.returnCommand(command);
    };
}
