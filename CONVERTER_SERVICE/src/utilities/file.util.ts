import fs from "fs";
import path from "path";
export class FileUtil {
    static async copyFile(file: any, destFolder: any, newName: any) {
        const source = fs.createReadStream(file);
        const dest = fs.createWriteStream(path.resolve(destFolder, newName));

        await new Promise<void>((resolve, rejects) => {
            source.pipe(dest);
            source.on("end", () => {
                resolve();
            });
            source.on("error", (err: Error) => {
                rejects();
            });
        });
    }
}
