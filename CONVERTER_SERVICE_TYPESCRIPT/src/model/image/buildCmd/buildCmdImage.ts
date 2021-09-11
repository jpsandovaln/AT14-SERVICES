import { CmdHeader } from "../cmd/cmdHeader";
import { CmdResize } from "../cmd/cmdResize";
import { CmdDoubling } from "../cmd/cmdDoubling";
import { CmdRotate } from "../cmd/cmdRotate";
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
        let imageResize = new CmdResize(super.getParameters());
        let imageDoubling = new CmdDoubling(super.getParameters());
        let imageRotate = new CmdDoubling(super.getParameters());
        let footer = new CmdFooter(
            super.getParameters(),
            this.outputPath,
            this.resultName
        );
        header.setNextCommand(imageResize);
        imageResize.setNextCommand(imageDoubling);
        imageDoubling.setNextCommand(footer);
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

let params = new Parameters({
    audioFormat: ".mp3",
    resize: 180,
    doubling: 10,
    vflip: "true",
    hflip: "true",
    outputFormat: ".flv",
    frameScale: "400",
    timeBetweenFrames: "5",
    outputFormatFrames: ".png",
});
let cmd = new BuildCmdImage(
    params,
    "codec---> ",
    "image---> ",
    "output--->",
    "resulName"
);
console.log(cmd.returnCmd());
