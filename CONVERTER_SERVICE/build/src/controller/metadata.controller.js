"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
require("dotenv").config("../../.env");
const fetching = require("../utilities/metadata");
const uploadFileMiddleware = require("../middleware/uploadFilesWithoutHush");
const getMetadata = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield uploadFileMiddleware(req, res);
    const executePathExiftool = process.env.CONVERTER_PATH_EXIFTOOL;
    const uploadPath = process.env.UPLOAD_PATH;
    const nameFile = req.file.filename;
    const metadataP = yield fetching(executePathExiftool, uploadPath + nameFile);
    res.send({ message: metadataP });
});
module.exports = getMetadata;
