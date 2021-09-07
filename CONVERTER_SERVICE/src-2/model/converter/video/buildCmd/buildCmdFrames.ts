import { CmdHeader } from "../cmd/cmdHeader";
import { CmdVF } from "../cmd/cmdVf";
import { CmdFooter } from "../cmd/cmdFooter";
import { Parameters } from "../parameter/parameters";
import { BuildCmd } from "./buildCmd";

const FRAME_NAME = '%d'

export class BuildCmdFrames extends BuildCmd{
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
        let header = new CmdHeader(super.getParameters(), this.codecPath, this.filePath);
        let vf = new CmdVF(super.getParameters(), "buildObtainFrames");
        let footer = new CmdFooter(super.getParameters(), this.outputPath, FRAME_NAME, super.getParameter('outputFormatFrames'));
        header.setNextCommand(vf);;
        vf.setNextCommand(footer);
        return header.returnCommand(""); 
    }
}
/*
let params = new Parameters({ ratio: '15', scale: '340 x 120', quality: '0', angle: '180', grayScale: 'true', vflip: 'true', hflip: 'true', outputFormat: '.flv', frameScale: '400', timeBetweenFrames: '5', outputFormatFrames: '.png'});
let cmd = new BuildCmdFrames(params, 'codec--->', 'video--->', 'output--->');
console.log(cmd.returnCmd());*/