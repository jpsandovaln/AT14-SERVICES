import { CmdHeader } from "../cmd/cmdHeader";
import { CmdAudio } from "../cmd/cmdAudio";
import { CmdFooter } from "../cmd/cmdFooter";
import { Parameters } from "../../common/parameter/parameters";
import { BuildCmd } from "./buildCmd";

export class BuildCmdAudio extends BuildCmd{
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
        let vf = new CmdAudio(super.getParameters());
        let footer = new CmdFooter(super.getParameters(), this.outputPath, this.resultName);
        header.setNextCommand(vf);
        vf.setNextCommand(footer);
        return header.returnCommand(""); 
    }
}

/*
let params = new Parameters({ audioFormat: '.mp3', angle: '180', grayScale: 'false', vflip: 'true', hflip: 'true', outputFormat: '.flv', frameScale: '400', timeBetweenFrames: '5', outputFormatFrames: '.png'});
let cmd = new BuildCmdAudio(params, 'codec--->', 'video--->', 'output--->', 'resulName');
console.log(cmd.returnCmd());*/