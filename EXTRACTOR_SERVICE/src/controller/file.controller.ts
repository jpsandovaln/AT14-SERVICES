import express from "express";
import { Upload } from "../middleware/upload";

import { createWorker } from "tesseract.js";

const worker = createWorker({});

const upload = new Upload();

class FileController {
    upload = async (req: express.Request, res: express.Response) => {
        try {
            await upload.fileUploadMiddleware(req, res);

            if (req.file == undefined) {
                return res
                    .status(400)
                    .send({ message: "Please upload a file!" });
            }
            if (req.file) {
                await worker.load();
                await worker.loadLanguage("eng");
                await worker.initialize("eng");

                const {
                    data: { text },
                } = await worker.recognize(req.file.path);
                return res.status(200).send(text);
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
