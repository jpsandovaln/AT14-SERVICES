import { CmdFooter } from "../cmd/cmdFooter";
import { CmdHeader } from "../cmd/cmdHeader";
import { CmdQuality } from "../cmd/cmdQuality";
import { CmdRatio } from "../cmd/cmdRatio";
import { CmdScale } from "../cmd/cmdScale";
import { CmdVF } from "../cmd/cmdVf";
import { Parameters } from "../../common/parameter/parameters";
import { BuildCmd } from "./buildCmd";
export class BuildCmdChangeFormat extends BuildCmd {
    private codecPath!: string;
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
        let header = new CmdHeader(this.getParameters(), this.codecPath, this.filePath);
        let ratio = new CmdRatio(this.getParameters());
        let scale = new CmdScale(this.getParameters());
        let quality = new CmdQuality(this.getParameters());
        let vf = new CmdVF(this.getParameters(), "buildChangeFormat");
        let footer = new CmdFooter(this.getParameters(), this.outputPath, this.resultName);
        header.setNextCommand(ratio);
        ratio.setNextCommand(scale);
        scale.setNextCommand(quality);
        quality.setNextCommand(vf);
        vf.setNextCommand(footer);
        return header.returnCommand("");
    }
}
