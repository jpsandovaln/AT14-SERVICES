import { BuildCmdAudio } from "../../../model/video/buildCmd/buildCmdAudio";
import { Property } from "../../../utilities/property";
import { Service } from "./service";

export class ServiceExtractAudio extends Service{
    constructor(json: object, nameFile: string, resultName: string) {
        super(json, nameFile, resultName);
    }

    async resultPath(): Promise<string> {        
        if(this.params.getParameter('obtainAudio') == 'true') {
            let cmdObtainAudio = new BuildCmdAudio (this.params, Property.getFFmpegPath(), this.filePath, Property.getAudioPath(), this.resultName);
            await this.compiler.execute(cmdObtainAudio.returnCmd());    
            const resultPathAudio = Property.getAudioPath() + this.resultName + this.params.getParameter('audioFormat');
            return resultPathAudio;
        }        
        else 
            return "";
    };
}