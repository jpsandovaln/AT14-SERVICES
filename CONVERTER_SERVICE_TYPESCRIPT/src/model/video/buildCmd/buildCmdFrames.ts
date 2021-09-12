import { CmdHeader } from "../cmd/cmdHeader";
import { CmdVF } from "../cmd/cmdVf";
import { Parameters } from "../../common/parameter/parameters"
import { BuildCmd } from "./buildCmd";
import { CmdFooterFrames } from "../cmd/cmdFooterFrames";
export class BuildCmdFrames extends BuildCmd{
    private codecPath: string;
    private filePath: string;
    private outputPath: string;
    private FRAME_NAME = '%d'
    constructor(params: Parameters, codecPath: string, filePath: string, outputPath: string) {
        super(params);
        this.codecPath = codecPath;
        this.filePath = filePath;
        this.outputPath = outputPath;
    }

    returnCmd() {
        let header = new CmdHeader(this.getParameters(), this.codecPath, this.filePath);
        let vf = new CmdVF(this.getParameters(), "buildObtainFrames");
        let footer = new CmdFooterFrames(this.getParameters(), this.outputPath, this.FRAME_NAME);
        header.setNextCommand(vf);
        vf.setNextCommand(footer);
        return header.returnCommand(""); 
    }
}
