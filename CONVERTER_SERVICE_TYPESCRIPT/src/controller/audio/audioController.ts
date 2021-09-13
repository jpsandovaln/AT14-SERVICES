import path = require('path');
import { ZippingResultFiles } from '../../middleware/video/zips/zippingResultFiles';
import { Property } from '../../utilities/property';
import { AudioServices } from '../../middleware/audio/audioServices';
export class AudioController {
    AudioProcess = async (req: any, res: any) => {
        try {
            const nameFile = req.fields.filename;
            const resultName = Date.now().toString();
            const obtainResult = new AudioServices(req.fields, nameFile, resultName, Property.getFFmpegPath());
            const nameAudioFile = path.basename(await obtainResult.ChangeAudioFormat());
            res.status(200).send([
                {
                    name: nameFile,
                    filePath: Property.getBaseUrl() + ":" + Property.getPort() + "/files/" + nameAudioFile,
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
