import { CmdHeader } from "../cmd/cmdHeader";
import { CmdAudio } from "../cmd/cmdAudio";
import { Parameters } from "../../common/parameter/parameters";
import { BuildCmd } from "./buildCmd";
import { CmdFooterAudio } from "../cmd/cmdFooterAudio";
export class BuildCmdAudio extends BuildCmd {
    private codecPath: string;
    private filePath: string;
    private outputPath: string;
    private resultName: string;
    constructor(params: Parameters, codecPath: string, filePath: string, outputPath: string, resultName: string) {
        super(params);
        this.codecPath = codecPath;
        this.filePath = filePath;
        this.outputPath = outputPath;
        this.resultName = resultName;
    }

    returnCmd() {
        let header = new CmdHeader(super.getParameters(), this.codecPath, this.filePath);
        let vf = new CmdAudio(super.getParameters());
        let footer = new CmdFooterAudio(super.getParameters(), this.outputPath, this.resultName);
        header.setNextCommand(vf);
        vf.setNextCommand(footer);
        return header.returnCommand("");
    }
}
