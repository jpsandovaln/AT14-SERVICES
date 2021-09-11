import path = require('path');
import { Property } from '../../../utilities/property';
import { Zip } from '../../../utilities/zipping';
import { ServiceChangeVideo } from '../services/serviceChangeVideo';
import { ServiceExtractAudio } from '../services/serviceExtractAudio';
import { ServiceExtracFrames } from '../services/serviceExtractFrames';

export class ZippingResultFiles{

    async obtainResultPaths(fileName: string, body: object, obtainFrames: string, obtainAudio: string): Promise<string> {
        const resultName = Date.now().toString();
        let paths: Array<string> = [];
        const changeVideo = new ServiceChangeVideo(body, fileName, resultName);
        paths.push(await changeVideo.resultPath());
        if(obtainAudio == 'true') {
            const extractAudio = new ServiceExtractAudio(body, fileName, resultName);
            paths.push(await extractAudio.resultPath());
        }
        if(obtainFrames == 'true') {
            const extractFrames = new ServiceExtracFrames(body, fileName, resultName);
            const pathFrames = await extractFrames.resultPath();
            if(pathFrames != "") {
                paths.push(await Zip.zipDirectory(pathFrames));
            }
        }   
        const resultZipPath = await Zip.zipFileList(paths, Property.getOutputPath() + resultName);     
        const nameZipFile = path.basename(resultZipPath); 
        return resultZipPath;
    }
}
