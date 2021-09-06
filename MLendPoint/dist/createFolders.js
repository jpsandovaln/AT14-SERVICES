"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const createFolders = () => {
    (0, fs_1.mkdirSync)("./public/images", { recursive: true });
    (0, fs_1.mkdirSync)("./public/unZipFiles", { recursive: true });
};
exports.default = createFolders;
