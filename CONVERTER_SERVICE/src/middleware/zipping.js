const fs = require("fs");
const path = require("path");
const AdmZip = require("adm-zip");
class Zip {
    constructor() { }

    zipImages(framesPath) {
        if(fs.existsSync(framesPath)) {
            var listFiles = this.obtainDirectory(framesPath);
            console.log(listFiles);
            const zip = new AdmZip();
            listFiles.forEach((file) => {
                zip.addLocalFile(framesPath + "/" + file);
            });
            var willSendthis = zip.toBuffer();
            zip.writeZip(framesPath + ".zip");
            return framesPath + ".zip";
        }
        else{
            return "";
        }        
    }

    zipFiles(framesNamePath, audioPath, videoPath) {
        const zipAll = new AdmZip();     
        const zipImage = this.zipImages(framesNamePath);
        if(fs.existsSync(audioPath)) {zipAll.addLocalFile(audioPath)};
        if(fs.existsSync(videoPath)) {zipAll.addLocalFile(videoPath)};
        if(fs.existsSync(zipImage)) {zipAll.addLocalFile(zipImage)};
        var willSendthis2 = zipAll.toBuffer();
        zipAll.writeZip(framesNamePath + "_all_files.zip");
        return framesNamePath + "_all_files.zip";
    }

    obtainDirectory(path) {
        return fs.readdirSync(path);
    }
}

module.exports = Zip;
