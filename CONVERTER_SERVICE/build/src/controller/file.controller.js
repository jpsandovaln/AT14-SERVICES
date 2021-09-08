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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileController = void 0;
const upload_1 = require("../middleware/upload");
const compiler_1 = require("../model/compiler");
const CommandBuilder_1 = require("../model/images/CommandBuilder");
const upload = new upload_1.Upload();
const compiler = new compiler_1.Compiler();
class FileController {
    constructor() {
        this.upload = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield upload.fileUploadMiddleware(req, res);
                if (req.file == undefined) {
                    return res
                        .status(400)
                        .send({ message: "Please upload a file!" });
                }
                if (req.file != undefined) {
                    const commandBuilder = new CommandBuilder_1.CommandBuilder(req.body).createCommand(req.body);
                    compiler.execute("magick " +
                        req.file.path +
                        " " +
                        commandBuilder +
                        " " +
                        req.file.path);
                    res.status(200).send("Success");
                }
            }
            catch (err) {
                if (err.code == "LIMIT_FILE_SIZE") {
                    return res.status(500).send({
                        message: "File size cannot be larger than 2MB!",
                    });
                }
                res.status(500).send({
                    message: `Could not upload the file ${err}`,
                });
            }
        });
    }
}
exports.FileController = FileController;
