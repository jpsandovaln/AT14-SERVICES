import express from "express";
import { Upload } from "../middleware/upload";
import { createWorker } from "tesseract.js";
import { ExtractToText } from "../model/tesseract/extractToText";
import { IBase } from "../model/tesseract/interfaces/iBase";
import { Extractor } from "../model/tesseract/extractor";
import { ExtractToPDF } from "../model/tesseract/extractToPDF";

const worker = createWorker({});
const upload = new Upload();

class FileController {
    extractText = async (req: express.Request, res: express.Response) => {
        try {
            await upload.fileUploadMiddleware(req, res);

            if (req.file == undefined) {
                return res
                    .status(400)
                    .send({ message: "Please upload a file!" });
            }
            if (req.file) {
                const imageBasic: IBase = {
                    worker: worker,
                    language: "eng",
                    path: req.file.path,
                };
                  const text: Extractor = new ExtractToText(imageBasic);
                                  
                return res.status(200).send(await text.extract());
            }
        } catch (err: any) {
            if (err.code == "LIMIT_FILE_SIZE") {
                return res.status(500).send({
                    message: "File size cannot be larger than 2MB!",
                });
            }

            res.status(500).send({
                message: `Could not upload the file ${err}`,
            });
        }
    };

    extractToPDF = async (req: express.Request, res: express.Response) => {
        try {
            await upload.fileUploadMiddleware(req, res);

            if (req.file == undefined) {
                return res
                    .status(400)
                    .send({ message: "Please upload a file!" });
            }
            if (req.file) {
                const imageBasic: IBase = {
                    worker: worker,
                    language: "eng+chi_tra",
                    path: req.file.path,
                  };
                  const text: Extractor = new ExtractToPDF(imageBasic);
                                  
                return res.status(200).send(await text.extract());
            }
        } catch (err: any) {
            if (err.code == "LIMIT_FILE_SIZE") {
                return res.status(500).send({
                    message: "File size cannot be larger than 2MB!",
                });
            }

            res.status(500).send({
                message: `Could not upload the file ${err}`,
            });
        }
    };
}

export { FileController };
