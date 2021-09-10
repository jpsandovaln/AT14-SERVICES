import { Compiler } from "../../model/common/compiler/compiler";
import { BuildCmdAudio } from "../../model/video/buildCmd/buildCmdAudio";
import { BuildCmdChangeFormat } from "../../model/video/buildCmd/buildCmdChangeFormat";
import { BuildCmdFrames } from "../../model/video/buildCmd/buildCmdFrames";
import { Parameters } from "../../model/common/parameter/parameters";
import { Property } from "../../utilities/property";
var fs = require('fs');
export class VideoServices{
    public params: Parameters;
    private compiler: Compiler;
    private resultName: string;
    private filePath: string; 
    
    constructor(json: object, nameFile: string, resultName: string) {
        this.params = new Parameters(json); 
        console.info(this.params);
        this.compiler = new Compiler();
        this.resultName = resultName;
        this.filePath = Property.getUploadPath() + nameFile;        
    }

    async changeVideoFormat() {
        let cmdVideoFormat = new BuildCmdChangeFormat(this.params, Property.getFFmpegPath(), this.filePath, Property.getVideoPath(), this.resultName);
        await this.compiler.execute(cmdVideoFormat.returnCmd());
        const resultPathVideoFormat = Property.getOutputPath() + this.resultName + this.params.getParameter('outputFormat');
        return resultPathVideoFormat;
    }       

    async obtainFrames() {
        if(this.params.getParameter('obtainFrames') == 'true') {
            const dir = Property.getZipPath() + this.resultName;
            if (!fs.existsSync(dir)){
                fs.mkdirSync(dir);
            }
            let cmdObtainFrames = new BuildCmdFrames(this.params, Property.getFFmpegPath(), this.filePath, dir + "/");
            console.log(cmdObtainFrames.returnCmd());
            await this.compiler.execute(cmdObtainFrames.returnCmd());
            return dir;
        }        
        else
            return "";
    }   

    async obtainAudio() {
        if(this.params.getParameter('obtainAudio') == 'true') {
            let cmdObtainAudio = new BuildCmdAudio (this.params, Property.getFFmpegPath(), this.filePath, Property.getAudioPath(), this.resultName);
            await this.compiler.execute(cmdObtainAudio.returnCmd());    
            const resultPathAudio = Property.getAudioPath() + this.resultName + this.params.getParameter('audioFormat');
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


