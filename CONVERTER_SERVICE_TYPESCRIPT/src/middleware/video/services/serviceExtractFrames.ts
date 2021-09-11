import { BuildCmdFrames } from "../../../model/video/buildCmd/buildCmdFrames";
import { Property } from "../../../utilities/property";
import { Service } from "./service";
import fs from 'fs'

export class ServiceExtracFrames extends Service{
    constructor(json: object, nameFile: string, resultName: string) {
        super(json, nameFile, resultName);
    }

    async resultPath(): Promise<string> {        
        if(this.params.getParameter('obtainFrames') == 'true') {
            const dir = Property.getZipPath() + this.resultName;
            if (!fs.existsSync(dir)){
                fs.mkdirSync(dir);
            }
            let cmdObtainFrames = new BuildCmdFrames (this.params, Property.getFFmpegPath(), this.filePath, dir + "/");
            await this.compiler.execute(cmdObtainFrames.returnCmd());
            return dir;
        }        
        else
            return "";
    };
}