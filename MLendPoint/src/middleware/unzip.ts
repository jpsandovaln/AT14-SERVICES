import AdmZip from "adm-zip";
import path from "path";

class UnZip {
    constructor() {}

    extractZip(zipPath: string, outPath: string) {
        let nameFile = path.parse(zipPath).name;
        const zip = new AdmZip(zipPath);
        var zipEntries = zip.getEntries();

        zip.extractAllTo(outPath, true);
    }
}

module.exports = UnZip;
