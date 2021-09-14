import { Config } from "./config";
import { IUploadConfig } from "./interfaces/upload.config.interface";

export abstract class UploadConfig extends Config implements IUploadConfig {
    mainPath = process.env.MAIN_PATH;
    maxSize = 2 * 1024 * 1024;
    constructor() {
        super();
    }
}
