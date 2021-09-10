import { Compiler } from "../../model/common/compiler/compiler";
import { BuildCmdAudio } from "../../model/audio/buildCmd/buildCmdAudio";
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
        let cmdChangeAudioFormat = new BuildCmdAudio (this.params, Property.getFFmpegPath(), this.filePath, Property.getOutputPath(), this.resultName);
        await this.compiler.execute(cmdChangeAudioFormat.returnCmd());    
        const resultPathAudio = Property.getAudioPath + this.resultName + this.params.getParameter('audioFormat');
        return resultPathAudio;
    } 
}
