import { BuildCmdImage } from "../../model/image/buildCmd/buildCmdImage";
import { Compiler } from "../../model/common/compiler/compiler";
import { Upload } from "../../middleware/image/upload";
import { Property } from "../../utilities/property";
import { Parameters } from "../../model/common/parameter/parameters";
import express from "express";
/*
export class ImageController {
    test(req: express.Request, res: express.Response) {
        res.json({ message: "testing purposes" });
    }
}*/
export class ImageController {
    upload = async (req: express.Request, res: express.Response) => {
        try {
            await new Upload().fileUploadMiddleware(req, res);

            if (req.file == undefined) {
                return res
                    .status(400)
                    .send({ message: "Please upload a file!" });
            }
            if (req.file != undefined) {
                let params = new Parameters(req.body);
                const commandBuilder = new BuildCmdImage(
                    params,
                    Property.getMagickPath() + " ",
                    req.file.path,
                    Property.getOutputPath(),
                    req.file.filename
                );
                console.log(params);
                console.log(commandBuilder.returnCmd());
                new Compiler().execute(commandBuilder.returnCmd());
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
