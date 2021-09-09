import fs from "fs";
import AdmZip from "adm-zip";

export class Zip {
    constructor() { }

    async zipImages(framesPath: string) : Promise<string> {
        return await new Promise((resolve, rejects) => {
            var listFiles = this.obtainDirectory(framesPath);
            const zip = new AdmZip();
            listFiles.forEach((file) => {
                zip.addLocalFile(framesPath + "/" + file);
            });
            var willSendthis = zip.toBuffer();
            zip.writeZip(framesPath + ".zip");
            resolve(framesPath + ".zip");
        });
    }

    async zipFiles(outputPath: string, framesZipPath: string, audioPath: string, videoPath: string): Promise<string> {
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

    obtainDirectory(directory: string): Array<string> {
        return fs.readdirSync(directory);
    }
}
