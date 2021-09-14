import { Compiler } from "../../model/common/compiler/compiler";
import { BuildCmdImage } from "../../model/image/buildCmd/buildCmdImage";
import { Parameters } from "../../model/common/parameter/parameters";
import { Property } from "../../utilities/property";

export class ImageServices {
    public params: Parameters;
    private compiler: Compiler;
    private resultName: string;
    private filePath: string;

    constructor(json: object, nameFile: string, resultName: string) {
        this.params = new Parameters(json);
        this.compiler = new Compiler();
        this.resultName = resultName;
        this.filePath = Property.getUploadPath() + nameFile;
    }

    async ChangeImageFormat() {
        let cmdChangeImageFormat = new BuildCmdImage(
            this.params,
            Property.getMagickPath(),
            this.filePath,
            Property.getOutputPath(),
            this.resultName
        );
        await this.compiler.execute(cmdChangeImageFormat.returnCmd());
        const resultImageAudio =
            Property.getImagePath +
            this.resultName +
            this.params.getParameter("imageFormat");
        return resultImageAudio;
    }
}
