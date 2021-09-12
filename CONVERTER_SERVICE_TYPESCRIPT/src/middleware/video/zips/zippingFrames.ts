import { Zip } from "../../../utilities/zipping";
import { ServiceExtracFrames } from "../services/serviceExtractFrames";

export class ZippingFrames {
    async obtainResultPath(fileName: string, body: object): Promise<string> {
        const resultName = Date.now().toString();
        const extractFrames = new ServiceExtracFrames(body, fileName, resultName);
        const pathFrames = await extractFrames.resultPath();
        const resultPath = await Zip.zipDirectory(pathFrames);
        return resultPath;
    }
}
