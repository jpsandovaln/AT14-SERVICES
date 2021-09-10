import { CmdHeader } from "../cmd/cmdHeader";
import { CmdFormatImage } from "../cmd/cmdFormatImage";
import { CmdFooter } from "../cmd/cmdFooter";
import { Parameters } from "../../common/parameter/parameters";
import { BuildCmd } from "./buildCmd";
import { IBuildCmdImage } from "./interfaces/buildCmdImageInterface";

export class BuildCmdImage extends BuildCmd implements IBuildCmdImage {
    private codecPath;
    private imagePath;
    private outputPath;
    private resultName;

    constructor(
        params: Parameters,
        codecPath: string,
        imagePath: string,
        outputPath: string,
        resultName: string
    ) {
        super(params);
        this.codecPath = codecPath;
        this.imagePath = imagePath;
        this.outputPath = outputPath;
        this.resultName = resultName;
    }
    returnCmd() {
        let header = new CmdHeader(
            super.getParameters(),
            this.codecPath,
            this.imagePath
        );
        let imageFormat = new CmdFormatImage(super.getParameters());
        let footer = new CmdFooter(
            super.getParameters(),
            this.outputPath,
            this.resultName
        );
        header.setNextCommand(imageFormat);
        imageFormat.setNextCommand(footer);
        return header.returnCommand("");
    }

    public getCodecPath() {
        return this.codecPath;
    }
    public setCodecPath(codecPath: string) {
        this.codecPath = codecPath;
    }
    public getImagePath() {
        return this.imagePath;
    }
    public setImagePath(imagePath: string) {
        this.imagePath = imagePath;
    }
    public getOutputPath() {
        return this.outputPath;
    }
    public setOutputPath(outputPath: string) {
        this.outputPath = outputPath;
    }
    public getResultName() {
        return this.codecPath;
    }
    public setResultName(resultName: string) {
        this.resultName = resultName;
    }
}
