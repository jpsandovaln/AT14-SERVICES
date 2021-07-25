var AdmZip = require('adm-zip');
/**
 * @Class
 * Build a string that is the command to rotate the image.
 */
class ExtractZip {
    
    constructor() {}

    extractZip (zipPath, outPath) {
        const zip = new AdmZip(zipPath);
        var zipEntries = zip.getEntries(); // an array of ZipEntry records

        zip.extractAllTo(/*target path*/outPath, /*overwrite*/true);
    }
}

module.exports = ExtractZip;

const extrac = new ExtractZip();
extrac.extractZip('C:/Users/Usuario/Desktop/Images.zip', 'C:/Users/Usuario/Desktop/a');


