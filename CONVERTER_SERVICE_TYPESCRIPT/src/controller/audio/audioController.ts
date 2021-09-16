import path = require('path');
import { Property } from '../../utilities/property';
import { AudioServices } from '../../middleware/audio/audioServices';
import Logger from '../../utilities/logger';
export class AudioController {
    AudioProcess = async (req: any, res: any) => {
        try {
            const nameFile = req.fields.filename;
            const resultName = Date.now().toString();
            const obtainResult = new AudioServices(req.fields, nameFile, resultName, Property.getFFmpegPath());
            const nameAudioFile = path.basename(await obtainResult.ChangeAudioFormat());
            Logger.debug(req.body)
            Logger.error("Please upload a Audio!")
            res.status(200).send([
                {
                    name: nameFile,
                    filePath: Property.getBaseUrl() + ":" + Property.getPort() + "/files/" + nameAudioFile,
                },
            ]);
        } catch (error) {
            Logger.error("Could not download the processed file (audio) ")
            res.send([
                {
                    message: "Something has gone wrong!!!"
                },
            ]);
        }
    };
}
