import fs from "fs";
import AdmZip from "adm-zip";

export class Zip {
    static async zipDirectory(Path: string) : Promise<string> {
        return await new Promise((resolve, rejects) => {
            var listFiles = this.obtainDirectory(Path);
            const zip = new AdmZip();
            listFiles.forEach((file) => {
                zip.addLocalFile(Path + "/" + file);
            });
            var willSendthis = zip.toBuffer();
            zip.writeZip(Path + ".zip");
            resolve(Path + ".zip");
        });
    }

    static async zipFileList(list: Array<string>, outputPath: string): Promise<string> {
        return await new Promise((resolve, rejects) => {
            const zipAll = new AdmZip(); 
            for (let file of list) {
                if(fs.existsSync(file)) {zipAll.addLocalFile(file)};
            }            
            var willSendthis2 = zipAll.toBuffer();
            zipAll.writeZip(outputPath + "_files.zip");
            resolve(outputPath + "_files.zip");           
        });
    }    

    static obtainDirectory(directory: string): Array<string> {
        return fs.readdirSync(directory);
    }
}
