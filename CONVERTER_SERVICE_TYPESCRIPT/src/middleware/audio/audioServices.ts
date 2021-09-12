import { Compiler } from "../../model/common/compiler/compiler";
import { BuildCmdChangeFormat } from "../../model/audio/buildCmd/buildCmdChangeFormatAudio";
import { BuildCmdChangeFadeOut } from "../../model/audio/buildCmd/buildCmdChangeFadeOut";
import { BuildCmdChangeFadeIn } from "../../model/audio/buildCmd/buildCmdChangeFadeIn"
import { Parameters } from "../../model/common/parameter/parameters";
import { Property } from "../../utilities/property"
var fs = require('fs');
export class AudioServices{
    public params: Parameters;
    private compiler: Compiler;
    private resultName: string;
    private filePath: string;
    
    constructor(json: object, nameFile: string, resultName: string, codecPath: string) {
        this.params = new Parameters(json); 
        this.compiler = new Compiler();
        this.resultName = resultName;
        this.filePath = Property.getUploadPath() + nameFile;
    } 

    async ChangeAudioFormat() {
        let cmdChangeAudioFormat = new BuildCmdChangeFormat (this.params, Property.getFFmpegPath(), this.filePath, Property.getOutputPath(), this.resultName);
        await this.compiler.execute(cmdChangeAudioFormat.returnCmd());    
        const resultPathAudio = Property.getAudioPath + this.resultName + this.params.getParameter('audioFormat');
        return resultPathAudio;
    } 

    async ChangeFadeIn() {
        let cmdChangeAudioFadeIn = new BuildCmdChangeFadeIn (this.params, Property.getFFmpegPath(), this.filePath, Property.getOutputPath(), this.resultName);
        await this.compiler.execute(cmdChangeAudioFadeIn.returnCmd());    
        const resultPathAudio = Property.getAudioPath + this.resultName + this.params.getParameter('fadeIn');
        return resultPathAudio;
    } 

    async ChangeFadeOut() {
        let cmdChangeAudioFadeOut = new BuildCmdChangeFadeOut (this.params, Property.getFFmpegPath(), this.filePath, Property.getOutputPath(), this.resultName);
        await this.compiler.execute(cmdChangeAudioFadeOut.returnCmd());    
        const resultPathAudio = Property.getAudioPath + this.resultName + this.params.getParameter('fadeOut');
        return resultPathAudio;
    } 
}
