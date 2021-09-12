import { Compiler } from "../../../model/common/compiler/compiler";
import { BuildCmdMetadata } from "../../../model/metadata/buildCmd/buildCmdMetadata";
import { Property } from "../../../utilities/property";

const EXTENSION = '.txt'
export class ServiceMetadata {
    public compiler: Compiler;
    public resultName: string;
    public filePath: string;

    constructor(nameFile: string, resultName: string) {
        this.compiler = new Compiler();
        this.resultName = resultName;
        this.filePath = Property.getUploadPath() + nameFile;
    }

    async resultPath(): Promise<string> {
        let cmdMetadata = new BuildCmdMetadata();
        await this.compiler.execute(cmdMetadata.returnCmd(Property.getExifToolPath(), this.filePath, Property.getOutputPath(), this.resultName));
        const resultPathMetadata = Property.getOutputPath() + this.resultName + EXTENSION;
        return resultPathMetadata;
    }
}
