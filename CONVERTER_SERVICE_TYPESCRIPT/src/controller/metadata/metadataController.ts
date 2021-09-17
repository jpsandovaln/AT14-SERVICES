import path = require('path');
import { ServiceMetadata } from '../../middleware/metadata/services/serviceMetadata';
import { Property } from '../../utilities/property';
import Logger from '../../utilities/logger';
export class MetadataController {
    MetadataProcess = async (req: any, res: any) => {
        try {
            const nameFile = req.fields.filename;
            const resultName = Date.now().toString();
            const metadata = new ServiceMetadata(nameFile, resultName);
            const resultMetadataPath = await metadata.resultPath();
            const nameTextFile = path.basename(resultMetadataPath);
            Logger.info("Uploaded file!")
            res.status(200).send([
                {
                    name: nameFile,
                    filePath: Property.getBaseUrl() + ":" + Property.getPort() + "/filesMetadata/" + nameTextFile,
                },
            ]);
        } catch (error) {
            Logger.error("Something has gone wrong in Metadata Service!!!")
            res.send([
                {
                    message: "Something has gone wrong!!!"
                },
            ]);
        }
    };
}
