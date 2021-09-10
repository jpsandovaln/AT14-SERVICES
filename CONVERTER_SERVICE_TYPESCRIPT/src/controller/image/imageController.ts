/*import express from "express";
import { Upload } from "../middleware/upload";
import { Compiler } from "../model/compiler";
import { CommandBuilder } from "../model/images/CommandBuilder";

const upload = new Upload();
const compiler = new Compiler();

class FileController {
    upload = async (req: express.Request, res: express.Response) => {
        try {
            await upload.fileUploadMiddleware(req, res);

            if (req.file == undefined) {
                return res
                    .status(400)
                    .send({ message: "Please upload a file!" });
            }
            if (req.file != undefined) {
                const commandBuilder = new CommandBuilder(
                    req.body
                ).createCommand(req.body);
                compiler.execute(
                    "magick " +
                        req.file.path +
                        " " +
                        commandBuilder +
                        " " +
                        req.file.path
                );
                res.status(200).send("Success");
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
*/
