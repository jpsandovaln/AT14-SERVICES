import { Compiler } from "../../model/common/compiler/compiler";
import { BuildCmdAudio } from "../../model/audio/buildCmd/buildCmdAudio";
import { Parameters } from "../../model/common/parameter/parameters";
var fs = require('fs');
export class AudioServices{
    public params: Parameters;
    private compiler: Compiler;
    private nameFile: string;
    private resultName: string;
    private filePath: string;
    private codecPath: string;
    private uploadPath: string;
    private outputPath: string;
    private audioPath: string;
    
    constructor(json: object, nameFile: string, resultName: string, codecPath: string, uploadPath: string, outputPath: string, audioPath: string) {
        this.params = new Parameters(json); 
        this.compiler = new Compiler();
        this.nameFile = nameFile;
        this.resultName = resultName;
        this.filePath = uploadPath + nameFile;
        this.codecPath = codecPath;
        this.uploadPath = uploadPath;
        this.outputPath = outputPath;
        this.audioPath = audioPath;
    } 

    async ChangeAudioFormat() {
        let cmdChangeAudioFormat = new BuildCmdAudio (this.params, this.codecPath, this.filePath, this.outputPath, this.resultName);
        await this.compiler.execute(cmdChangeAudioFormat.returnCmd());    
        const resultPathAudio = this.audioPath + this.resultName + this.params.getParameter('audioFormat');
        return resultPathAudio;

    } 
}
