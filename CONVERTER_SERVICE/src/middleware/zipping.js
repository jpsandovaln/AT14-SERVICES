const fs = require("fs");
const path = require("path");
const AdmZip = require("adm-zip");
class Zip {
    constructor() { }

    async zipImages(framesPath) {
        return await new Promise((resolve, rejects) => {
            var listFiles = this.obtainDirectory(framesPath);
            console.log(listFiles);
            const zip = new AdmZip();
            listFiles.forEach((file) => {
                zip.addLocalFile(framesPath + "/" + file);
            });
            var willSendthis = zip.toBuffer();
            zip.writeZip(framesPath + ".zip");
            resolve(framesPath + ".zip");
        });
    }

    async zipFiles(outputPath, framesZipPath, audioPath, videoPath) {
        return await new Promise((resolve, rejects) => {
            const zipAll = new AdmZip(); 
            if(fs.existsSync(audioPath)) {zipAll.addLocalFile(audioPath)};
            if(fs.existsSync(videoPath)) {zipAll.addLocalFile(videoPath)};
            if(fs.existsSync(framesZipPath)) {zipAll.addLocalFile(framesZipPath)};
            var willSendthis2 = zipAll.toBuffer();
            zipAll.writeZip(outputPath + "_files.zip");
            resolve(outputPath + "_files.zip");           
        });
    }

    obtainDirectory(path) {
        return fs.readdirSync(path);
    }
}

module.exports = Zip;
