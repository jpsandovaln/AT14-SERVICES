import { BuildCmdChangeFormat } from "../converter/video/buildCmd/buildCmdChangeFormat";
import { Parameters } from "../converter/video/parameter/parameters";
import { Compiler } from "./compiler";

class Probar{
    private params: Parameters;
    constructor(json: object) {
        this.params = new Parameters(json); 
    }

    execCommand():void {
        let compiler = new Compiler();
        let changeVideo = new BuildCmdChangeFormat(this.params, 'E:/SALIDAS/ffmpeg.exe', 'C:/Users/Usuario/Desktop/Video.mp4' , 'E:/SALIDAS/', 'EDWIN');
        console.log(changeVideo.returnCmd());
        compiler.execute(changeVideo.returnCmd());
    }
}

let probar = new Probar({ ratio: '15', scale: '340x120', quality: '0', angle: '', grayScale: 'false', vflip: 'false', hflip: 'false', outputFormat: '.flv'});
probar.execCommand();