const AdmZip = require("adm-zip");
const path = require("path");

class UnZip {
    constructor() { }

    extractZip(zipPath, outPath) {
        let nameFile = path.parse(zipPath).name;
        const zip = new AdmZip(zipPath);
        var zipEntries = zip.getEntries();
        
        zip.extractAllTo(outPath, true);
        
    }
}

module.exports = UnZip;
