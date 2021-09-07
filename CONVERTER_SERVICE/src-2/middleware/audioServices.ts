import { Compiler } from "../model/compiler/compiler";
import { BuildCmdAudio } from "../model/converter/audio/buildCmd/buildCmdAudio";
import { Parameters } from "../model/converter/video/parameter/parameters";
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
    private zipPath: string;
    
    constructor(json: object, nameFile: string, resultName: string, codecPath: string, uploadPath: string, outputPath: string, audioPath: string, zipPath: string) {
        this.params = new Parameters(json); 
        this.compiler = new Compiler();
        this.nameFile = nameFile;
        this.resultName = resultName;
        this.filePath = uploadPath + nameFile;
        this.codecPath = codecPath;
        this.uploadPath = uploadPath;
        this.outputPath = outputPath;
        this.audioPath = audioPath;
        this.zipPath = zipPath;
    } 

    async ChangeAudioFormat() {
        if(this.params.getParameter('obtainAudio') == 'true') {
            let cmdObtainAudio = new BuildCmdAudio (this.params, this.codecPath, this.filePath, this.outputPath, this.resultName);
            await this.compiler.execute(cmdObtainAudio.returnCmd());    
            const resultPathAudio = this.audioPath + this.resultName + this.params.getParameter('audioFormat');
            return resultPathAudio;
        }        
        else 
            return "";
    } 
}

/*let p = { ratio: '15', scale: '426x240', quality: '0', angle: '90', grayScale: 'false', vflip: 'false', hflip: 'false', obtainFrames: 'true', obtainAudio: 'true', audioFormat: '.mp3', outputFormat: '.flv', frameScale: '400', timeBetweenFrames: '5', outputFormatFrames: '.png'};
let services = new AudioServices(p, 'Video.mp4', 'EDWIN', 'E:/SALIDAS/ffmpeg.exe', 'C:/Users/Usuario/Desktop/', 'E:/SALIDAS/', 'E:/SALIDAS/', 'E:/SALIDAS/', 'E:/SALIDAS/');
console.log(services.ChangeAudioFormat());*/
