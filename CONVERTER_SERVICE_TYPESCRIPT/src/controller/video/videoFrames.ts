import path = require('path');
import { ZippingFrames } from '../../middleware/video/zips/zippingFrames';
import { Property } from '../../utilities/property';
export class FramesController {
    frameProcess = async (req: any, res: any) => {
        try {
            const nameFile = req.fields.filename;
            const framesResults = new ZippingFrames();
            const resultZipPath = await framesResults.obtainResultPath(nameFile, req.fields);
            const nameZipFile = path.basename(resultZipPath);
            res.status(200).send([
                {
                    name: nameFile,
                    filePath: Property.getBaseUrl() + ":" + Property.getPort() + "/framesZipML/" + nameZipFile,
                },
            ]);
        } catch (error) {
            res.send([
                {
                    message: "Something has gone wrong!!!"
                },
            ]);
        }
    };
}
