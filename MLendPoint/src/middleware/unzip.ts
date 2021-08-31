import AdmZip from "adm-zip";

class UnZip {
    extractZip(zipPath: string, outPath: string): void {
        const zip = new AdmZip(zipPath);
        zip.extractAllTo(outPath, true);
    }
}

export default UnZip;
