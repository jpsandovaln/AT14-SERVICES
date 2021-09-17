import { Property } from "../../utilities/property";
import fs from 'fs'
import { Parameters } from "../../model/common/parameter/parameters";
import { Compiler } from "../../model/common/compiler/compiler";
import { BuildCmdPdfToImage } from "../../model/pdf/buildcmd.ts/buildCmdPdfToImages";

export class ServicePdfToImages {
    public params: Parameters;
    public compiler: Compiler;
    public resultName: string;
    public filePath: string; 
    constructor(json: object, nameFile: string, resultName: string) {
        this.params = new Parameters(json);
        this.compiler = new Compiler();
        this.resultName = resultName;
        this.filePath = Property.getUploadPath() + nameFile;     
    }

    async resultPath(): Promise<string> {
        const dir = Property.getImagePath() + this.resultName;
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
        let cmdPdfToImage = new BuildCmdPdfToImage(this.params, Property.getConvertPath(), this.filePath, dir + "/");
        console.log("----------" + cmdPdfToImage.returnCmd());
        await this.compiler.execute(cmdPdfToImage.returnCmd());
        return dir;
    };
}
