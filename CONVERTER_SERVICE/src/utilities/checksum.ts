import md5File from "md5-file";
export class Md5File {
    static getMD5File(filePath: string) {
        const hash = md5File.sync(filePath);
        return hash;
    }
}
