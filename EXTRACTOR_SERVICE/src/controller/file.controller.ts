import express from "express";
import { Upload } from "../middleware/upload";

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

            res.status(200).send({
                message:
                    "Uploaded the file successfully: " + req.file.originalname,
            });
        } catch (err: any) {
            console.log(err);

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
