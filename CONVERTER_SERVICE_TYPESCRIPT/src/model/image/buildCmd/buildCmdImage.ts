import { CmdHeader } from "../cmd/cmdHeader";
import { CmdDoubling } from "../cmd/cmdDoubling";
import { CmdGrayScale } from "../cmd/cmdGrayScale";
import { CmdMonochrome } from "../cmd/cmdMonochrome";
import { CmdPaint } from "../cmd/cmdPaint";
import { CmdQuality } from "../cmd/cmdQuality";
import { CmdResize } from "../cmd/cmdResize";
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
        let imageDoubling = new CmdDoubling(super.getParameters());
        let imageGrayScale = new CmdGrayScale(super.getParameters());
        let imageMonochrome = new CmdMonochrome(super.getParameters());
        let imagePaint = new CmdPaint(super.getParameters());
        let imageQuality = new CmdQuality(super.getParameters());
        let imageResize = new CmdResize(super.getParameters());
        let imageRotate = new CmdRotate(super.getParameters());
        let footer = new CmdFooter(
            super.getParameters(),
            this.outputPath,
            this.resultName
        );
        header.setNextCommand(imageDoubling);
        imageDoubling.setNextCommand(imageGrayScale);
        imageGrayScale.setNextCommand(imageMonochrome);
        imageMonochrome.setNextCommand(imagePaint);
        imagePaint.setNextCommand(imageQuality);
        imageQuality.setNextCommand(imageResize);
        imageResize.setNextCommand(imageRotate);
        imageRotate.setNextCommand(footer);
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
/*
let params = new Parameters({
    rotate: "10",
    resize: 10,
    quality: 0,
    paint: 0,
    monochrome: false,
    grayScale: false,
    doubling: 0,
    outputFormat: ".jpg",
});
let cmd = new BuildCmdImage(
    params,
    "codec---> ",
    "image---> ",
    "output--->",
    "resulName"
);
console.log(cmd.returnCmd());*/
