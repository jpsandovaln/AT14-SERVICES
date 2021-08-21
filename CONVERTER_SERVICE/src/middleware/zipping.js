const fs = require("fs");
const path = require("path");
const AdmZip = require("adm-zip");
class Zip {
    constructor() { }

    async zipImages(framesPath) {
        return await new Promise((resolve, rejects) => {
            if (fs.existsSync(framesPath)) {
                var listFiles = this.obtainDirectory(framesPath);
                console.log(listFiles);
                const zip = new AdmZip();
                listFiles.forEach((file) => {
                    zip.addLocalFile(framesPath + "/" + file);
                });
                var willSendthis = zip.toBuffer();
                zip.writeZip(framesPath + ".zip");
                resolve(framesPath + ".zip");
            }
            else {
                rejects(console.log("Ocurrio un error en ZIP IMAGES..."));
            }
        });
    }

    async zipFiles(framesPath, framesZipPath, audioPath, videoPath) {
        return await new Promise((resolve, rejects) => {
            const zipAll = new AdmZip(); 
            if(fs.existsSync(audioPath)) {zipAll.addLocalFile(audioPath)};
            if(fs.existsSync(videoPath)) {zipAll.addLocalFile(videoPath)};
            if(fs.existsSync(framesZipPath)) {zipAll.addLocalFile(framesZipPath)};
            var willSendthis2 = zipAll.toBuffer();
            zipAll.writeZip(framesPath + "_all_files.zip");
            resolve(framesPath + "_all_files.zip");           
        });
    }

    obtainDirectory(path) {
        return fs.readdirSync(path);
    }
}

module.exports = Zip;
