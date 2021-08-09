require('dotenv').config('../../.env');
const fs = require('fs');
const outputPath = process.env.OUTPUT_PATH;
const zipPath = process.env.ZIP_PATH;
const to_zip = fs.readdirSync(outputPath);
const admz = require('adm-zip');

class Zip {
    constructor(){}
    zipDownload(filePath) {
        const zip = new admz();
        zip.addFile('C:/Users/mile_/OneDrive/Documentos/Develop/AT14-SERVICES/CONVERTER_SERVICE/src/middleware/filesProcessor/1628320728519/1.png', Buffer.alloc(content.length, content), 'entry comment goes here');
        //zip.addLocalFile('C:/Users/mile_/OneDrive/Documentos/Develop/AT14-SERVICES/CONVERTER_SERVICE/src/middleware/filesProcessor/1628320728519/1.png');
        const downloadName = `${Date.now()}.zip`;
        const data = zip.toBuffer();

        zip.writeZip('C:/Users/mile_/OneDrive/Escritorio/zip/Edwin.zip');
        zip.writeZip(zipPath + downloadName + "/");
    }
}

module.exports = Zip;

const Zip1 = new Zip();
Zip1.zipDownload('jajaja');
