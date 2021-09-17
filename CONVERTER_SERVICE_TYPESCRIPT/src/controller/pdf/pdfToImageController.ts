import path = require('path');
import { ZippingImages } from '../../middleware/pdf/zippingImages';
import { Property } from '../../utilities/property';
import Logger from '../../utilities/logger';

export class PdfToImageController {
    pdfToImageProcess = async (req: any, res: any) => {
        try {
            const nameFile = req.fields.filename;
            const pdfResults = new ZippingImages();
            const resultZipPath = await pdfResults.obtainResultPath(nameFile, req.fields);
            const nameZipFile = path.basename(resultZipPath);
            Logger.debug(req.body)
            Logger.info(" uploaded file")
            res.status(200).send([
                {
                    name: nameFile,
                    filePath: Property.getBaseUrl() + ":" + Property.getPort() + "/convertPdftoImage/" + nameZipFile,
                },
            ]);
        } catch (error) {
            Logger.error("Something has gone wrong in document service!")
            res.send([
                {
                    message: "Something has gone wrong!!!"
                },
            ]);
        }
    };
}
