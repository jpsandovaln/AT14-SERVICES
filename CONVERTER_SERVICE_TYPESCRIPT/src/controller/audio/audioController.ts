import path = require('path');
import { ZippingResultFiles } from '../../middleware/video/zips/zippingResultFiles';
import { Property } from '../../utilities/property';
export class AudioController {
    AudioProcess = async (req: any, res: any) => {
        try {
            const nameFile = req.fields.filename;
            const zipResults = new ZippingResultFiles();
            const resultZipPath = await zipResults.obtainResultPath(nameFile, req.fields);
            const nameZipFile = path.basename(resultZipPath);
            res.status(200).send([
                {
                    name: nameFile,
                    filePath: Property.getBaseUrl() + ":" + Property.getPort() + "/files/" + nameZipFile,
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