import path = require('path');
import { Property } from '../../../utilities/property';
import { Zip } from '../../../utilities/zipping';
import { ServiceChangeVideo } from '../services/serviceChangeVideo';
import { ServiceExtractAudio } from '../services/serviceExtractAudio';
import { ServiceExtracFrames } from '../services/serviceExtractFrames';

export class ZippingResultFiles {
    async obtainResultPath(fileName: string, body: any): Promise<string> {
        const resultName = Date.now().toString();
        let paths: Array<string> = [];
        const changeVideo = new ServiceChangeVideo(body, fileName, resultName);
        paths.push(await changeVideo.resultPath());
        if (body.obtainAudio == 'true') {
            const extractAudio = new ServiceExtractAudio(body, fileName, resultName);
            paths.push(await extractAudio.resultPath());
        }
        if (body.obtainFrames == 'true') {
            const extractFrames = new ServiceExtracFrames(body, fileName, resultName);
            const pathFrames = await extractFrames.resultPath();
            if (pathFrames != "") {
                paths.push(await Zip.zipDirectory(pathFrames));
            }
        }
        const resultZipPath = await Zip.zipFileList(paths, Property.getOutputPath() + resultName);
        return resultZipPath;
    }
}
