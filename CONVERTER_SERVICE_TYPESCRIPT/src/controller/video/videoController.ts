import * as fs from 'fs';
import path = require('path');
import { VideoServices } from '../../middleware/video/videoServices';
import { Zip } from '../../middleware/video/zipping';
import { Property } from '../../utilities/property';

export class VideoController{
    constructor() { }
    videoProcess = async (req: any, res: any) => {          
        //try {
            const nameFile = req.fields.filename;
            const resultName = Date.now().toString();
            const videoServices = new VideoServices(req.fields, nameFile, resultName);

            const resultPathVideoFormat = await videoServices.changeVideoFormat();
            const resultPathFrames = "";//req.fields.obtainFrames == "true" ? await videoServices.obtainFrames() : "";
            const resultPathAudio = req.fields.obtainAudio == "true" ? await videoServices.obtainAudio() : "";
            const zip = new Zip();
            const pathFramesZip = resultPathFrames != "" ? await zip.zipImages(resultPathFrames) : "";
            const resultZipPath = await zip.zipFiles(
                Property.getOutputPath() + resultName,
                pathFramesZip,
                resultPathAudio,
                resultPathVideoFormat
            );
            const nameZipFile = path.basename(resultZipPath); 

            res.status(200).send([
                {
                    name: nameFile,
                    filePath: Property.getBaseUrl() + ":" + Property.getPort() + "/files/" + nameZipFile,
                },
            ]);            
    /*    } catch (error) {
            res.send([
                {
                    message: "HA HABIDO UN ERROR!!!"
                },
            ]);   
        }*/
    };
}
