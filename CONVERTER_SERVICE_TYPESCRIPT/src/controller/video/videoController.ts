import path = require('path');
import { ZippingResultFiles } from '../../middleware/video/zips/zippingResultFiles';
import { Property } from '../../utilities/property';
import Logger from '../../utilities/logger';
export class VideoController {
    videoProcess = async (req: any, res: any) => {
        try {
            const nameFile = req.fields.filename;
            const zipResults = new ZippingResultFiles();
            const resultZipPath = await zipResults.obtainResultPath(nameFile, req.fields);
            const nameZipFile = path.basename(resultZipPath);
            Logger.debug(req.body)
            Logger.info(" uploaded video")
            res.status(200).send([
                {
                    name: nameFile,
                    filePath: Property.getBaseUrl() + ":" + Property.getPort() + "/files/" + nameZipFile,
                },
            ]);
        } catch (error) {
            Logger.error("Something has gone wrong in video service!!")
            res.send([
                {
                    message: "Something has gone wrong!!!"
                },
            ]);
        }
    };
}
