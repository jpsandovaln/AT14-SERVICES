import { Config } from "./config";
import { IUploadConfig } from "./interfaces/upload.config.interface";

export abstract class UploadConfig extends Config implements IUploadConfig {
    constructor() {
        super();
    }
}
