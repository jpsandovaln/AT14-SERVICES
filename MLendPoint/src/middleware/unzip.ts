import AdmZip from "adm-zip";
import path from "path";

class UnZip {
    constructor() {}

    extractZip(zipPath: string, outPath: string) {
        //TODO: delete nameFile and zipEntries
        let nameFile = path.parse(zipPath).name;
        const zip = new AdmZip(zipPath);
        var zipEntries = zip.getEntries();

        zip.extractAllTo(outPath, true);
    }
}

export default UnZip;
