import { Parameters } from "../../parameter/parameters";
import { Vf } from "./vf";

const FFMPEG_GRAY_SCALE = ",hue=s=0";

export class CmdGrayScale extends Vf {
    public vf!: Vf;
    constructor(parameters: Parameters) { 
        super(parameters);        
    }

    setNextCommand():void { };

    returnCommand(command: string): string {     
        if(this.getParameter('grayScale') == 'true') {
            command = command + FFMPEG_GRAY_SCALE;                         
        }
        return command;
    };    
}
