import { CmdHeader } from "../cmd/cmdHeader";
import { Parameters } from "../../common/parameter/parameters"
import { BuildCmd } from "./buildCmd";
import { CmdQuality } from "../cmd/cmdQuality";
import { CmdSize } from "../cmd/cmdSize";
import { CmdRotate } from "../cmd/cmdRotate";
import { CmdEffect } from "../cmd/cmdPaintEffect";
import { CmdType } from "../cmd/cmdType";
import { CmdFooter } from "../cmd/cmdFooter";

export class BuildCmdPdfToImage extends BuildCmd {
    private codecPath: string;
    private filePath: string;
    private outputPath: string;
    constructor(params: Parameters, codecPath: string, filePath: string, outputPath: string) {
        super(params);
        this.codecPath = codecPath;
        this.filePath = filePath;
        this.outputPath = outputPath;
    }

    returnCmd() {
        let header = new CmdHeader(this.getParameters(), this.codecPath);
        let quality = new CmdQuality(this.getParameters());
        let size =  new CmdSize(this.getParameters());
        let rotate = new CmdRotate(this.getParameters());
        let paint = new CmdEffect(this.getParameters());
        let type = new CmdType(this.getParameters());
        let footer = new CmdFooter(this.getParameters(), this.filePath, this.outputPath);
        header.setNextCommand(quality);
        quality.setNextCommand(size);
        size.setNextCommand(rotate);
        rotate.setNextCommand(paint);
        paint.setNextCommand(type);
        type.setNextCommand(footer);     
        return header.returnCommand("");
    }
}
