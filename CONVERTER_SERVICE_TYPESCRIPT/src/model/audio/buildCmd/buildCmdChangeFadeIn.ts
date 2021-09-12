import { CmdHeader } from "../cmd/cmdHeader";
import { CmdFadeIn } from "../cmd/cmdFadeIn";
import { CmdFooter } from "../cmd/cmdFooter";
import { Parameters } from "../../common/parameter/parameters";
import { BuildCmd } from "./buildCmd";

export class BuildCmdChangeFadeIn extends BuildCmd{ 
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
        let audio = new CmdFadeIn(super.getParameters());
        let footer = new CmdFooter(super.getParameters(), this.outputPath, this.resultName);
        header.setNextCommand(audio);
        audio.setNextCommand(footer);
        return header.returnCommand(""); 
    }
}