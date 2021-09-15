import { Zip } from "../../utilities/zipping";
import { ServicePdfToImages } from "./servicePdfToImages";

export class ZippingImages {
    async obtainResultPath(fileName: string, body: object): Promise<string> {
        const resultName = Date.now().toString();
        const generateImages = new ServicePdfToImages(body, fileName, resultName);
        const pathImages = await generateImages.resultPath();
        const resultPath = await Zip.zipDirectory(pathImages);
        return resultPath;
    }
}
