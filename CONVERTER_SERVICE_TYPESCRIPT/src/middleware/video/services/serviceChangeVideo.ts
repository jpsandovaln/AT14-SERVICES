import { BuildCmdChangeFormat } from "../../../model/video/buildCmd/buildCmdChangeFormat";
import { Property } from "../../../utilities/property";
import { Service } from "./service";
export class ServiceChangeVideo extends Service {
    constructor(json: object, nameFile: string, resultName: string) {
        super(json, nameFile, resultName);
    }

    async resultPath(): Promise<string> {
        let cmdVideoFormat = new BuildCmdChangeFormat(this.params, Property.getFFmpegPath(), this.filePath, Property.getVideoPath(), this.resultName);
        await this.compiler.execute(cmdVideoFormat.returnCmd());
        const resultPathVideoFormat = Property.getVideoPath() + this.resultName + this.params.getParameter('outputFormat');
        return resultPathVideoFormat;
    };
}
