import { Compiler } from "../../model/common/compiler/compiler";
import { BuildCmdAudio } from "../../model/video/buildCmd/buildCmdAudio";
import { BuildCmdChangeFormat } from "../../model/video/buildCmd/buildCmdChangeFormat";
import { BuildCmdFrames } from "../../model/video/buildCmd/buildCmdFrames";
import { Parameters } from "../../model/common/parameter/parameters";
var fs = require('fs');
const uploadPath = "";
const outputPath = "";
const videoPath = "";
const audioPath = ""
const zipPath = "";
const codecPath = "";
export class VideoServices{
    public params: Parameters;
    private compiler: Compiler;
    private resultName: string;
    private filePath: string; 
    
    constructor(json: object, nameFile: string, resultName: string) {
        this.params = new Parameters(json); 
        this.compiler = new Compiler();
        this.resultName = resultName;
        this.filePath = uploadPath + nameFile;
    }

    async changeVideoFormat() {
        let cmdVideoFormat = new BuildCmdChangeFormat(this.params, codecPath, this.filePath, outputPath, this.resultName);
        await this.compiler.execute(cmdVideoFormat.returnCmd());
        const resultPathVideoFormat = outputPath + this.resultName + this.params.getParameter('outputFormat');
        return resultPathVideoFormat;
    }       

    async obtainFrames() {
        if(this.params.getParameter('obtainFrames') == 'true') {
            const dir = zipPath + this.resultName;
            if (!fs.existsSync(dir)){
                fs.mkdirSync(dir);
            }
            let cmdObtainFrames = new BuildCmdFrames(this.params, audioPath, this.filePath, dir + "/");
            await this.compiler.execute(cmdObtainFrames.returnCmd());
            return dir;
        }        
        else
            return "";
    }   

    async obtainAudio() {
        if(this.params.getParameter('obtainAudio') == 'true') {
            let cmdObtainAudio = new BuildCmdAudio (this.params, codecPath, this.filePath, outputPath, this.resultName);
            await this.compiler.execute(cmdObtainAudio.returnCmd());    
            const resultPathAudio = audioPath + this.resultName + this.params.getParameter('audioFormat');
            return resultPathAudio;
        }        
        else 
            return "";
    } 
}
/*
let p = { ratio: '15', scale: '426x240', quality: '0', angle: '90', grayScale: 'false', vflip: 'false', hflip: 'false', obtainFrames: 'true', obtainAudio: 'true', audioFormat: '.mp3', outputFormat: '.flv', frameScale: '400', timeBetweenFrames: '5', outputFormatFrames: '.png'};
let services = new VideoServices(p, 'Video.mp4', 'EDWIN', 'E:/SALIDAS/ffmpeg.exe', 'C:/Users/Usuario/Desktop/', 'E:/SALIDAS/', 'E:/SALIDAS/', 'E:/SALIDAS/', 'E:/SALIDAS/');
console.log(services.obtainAudio());*/


