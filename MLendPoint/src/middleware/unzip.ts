import AdmZip from "adm-zip";
import path from "path";

class UnZip {
    extractZip(zipPath, outPath) {
        const nameFile = path.parse(zipPath).name;
        const zip = new AdmZip(zipPath);
        const zipEntries = zip.getEntries();

        zip.extractAllTo(outPath, true);
    }
}

export default UnZip;
