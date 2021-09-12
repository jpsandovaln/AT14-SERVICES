import { CmdHeader } from "../cmd/cmdHeader";
import { CmdAudioFormat } from "../cmd/cmdAudioformat";
import { CmdFooter } from "../cmd/cmdFooter";
import { Parameters } from "../../common/parameter/parameters";
import { BuildCmd } from "./buildCmd";

export class BuildCmdChangeFormat extends BuildCmd{ 
    private codecPath: string;
    private videoPath: string;
    private outputPath: string;
    private resultName: string;

    constructor(params: Parameters, codecPath: string, videoPath: string, outputPath: string, resultName: string) {
        super(params);
        this.codecPath = codecPath;
        this.videoPath = videoPath;
        this.outputPath = outputPath;
        this.resultName = resultName;
    }
    
    returnCmd() {
        let header = new CmdHeader(super.getParameters(), this.codecPath, this.videoPath);
        let vf = new CmdAudioFormat(super.getParameters());
        let footer = new CmdFooter(super.getParameters(), this.outputPath, this.resultName);
        header.setNextCommand(vf);
        vf.setNextCommand(footer);
        return header.returnCommand(""); 
    }
}
