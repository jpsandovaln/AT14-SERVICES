"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadConfig = void 0;
const config_1 = require("./config");
class UploadConfig extends config_1.Config {
    constructor() {
        super();
        this.mainPath = process.env.MAIN_PATH;
        this.maxSize = 2 * 1024 * 1024;
    }
}
exports.UploadConfig = UploadConfig;
