import AdmZip from "adm-zip";
import path from "path";

class UnZip {
    extractZip(zipPath, outPath) {
        let nameFile = path.parse(zipPath).name;
        const zip = new AdmZip(zipPath);
        var zipEntries = zip.getEntries();

        zip.extractAllTo(outPath, true);
    }
}

export default UnZip;
