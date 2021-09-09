import express from "express";
import { Upload } from "../../middleware/common/upload";
import { Compiler } from "../../model/common/compiler/compiler"
import { AudioServices } from "../../middleware/audio/audioServices";

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
                const service = new AudioServices(
                    req.body, 'audio', 'audioOutput','/Users/Milena/ConverterToTypeScript/AT14-SERVICES/CONVERTER_SERVICE/thirdParty/ffmpeg.exe', req.file.path , '/Users/Milena/ConverterToTypeScript/AT14-SERVICES/CONVERTER_SERVICE/public/uploads', '/Users/Milena/ConverterToTypeScript/AT14-SERVICES/CONVERTER_SERVICE/public/uploads/.10_-_If_Today_Was_Your_Last_Day.mp3'
                )
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
