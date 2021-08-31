import express from "express";
import { Upload } from "../middleware/upload";
import { createWorker } from "tesseract.js";
import { ExtractToText } from "../model/tesseract/extractToText";
import { IBase } from "../model/tesseract/interfaces/iBase";
import { Extractor } from "../model/tesseract/extractor";
import { ExtractToPDF } from "../model/tesseract/extractToPDF";
import { ExtractCroppedImage } from "../model/tesseract/extractCroppedImage";
import { ICropped } from "../model/tesseract/interfaces/iCropped";

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
                    language: req.body.language,
                    path: req.file.path,
                };
                const text: Extractor = new ExtractToText(imageBasic);
                const result: Extractor = await text.extract();   

                return res.status(200).send(result);
            }
            await worker.terminate();     

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
                    language: req.body.language,
                    path: req.file.path,
                };
                const pdf: Extractor = new ExtractToPDF(imageBasic);
                const result: Extractor = await pdf.extract();     

                return res.status(200).send(result);
            }
            await worker.terminate();

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

    extractCroppedImage = async (req: express.Request, res: express.Response) => {
        try {
            await upload.fileUploadMiddleware(req, res);

            if (req.file == undefined) {
                return res
                    .status(400)
                    .send({ message: "Please upload a file!" });
            }
            if (req.file) {
                const rectanglePart = {
                    left: req.body.left,
                    top: req.body.top,
                    width: req.body.width,
                    height: req.body.height,
                };
                const imageToCropped: ICropped = {
                    worker: worker,
                    language: req.body.language,
                    path: req.file.path,
                    rectangle: rectanglePart,
                };
                const cropped: Extractor = new ExtractCroppedImage(imageToCropped);
                const result: Extractor = await cropped.extract();
                      
                return res.status(200).send(result);
            }
            await worker.terminate();

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
