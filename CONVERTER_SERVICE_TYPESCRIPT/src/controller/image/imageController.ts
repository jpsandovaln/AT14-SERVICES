import { BuildCmdImage } from "../../model/image/buildCmd/buildCmdImage";
import { Compiler } from "../../model/common/compiler/compiler";
import { Upload } from "../../middleware/image/upload";
import { Property } from "../../utilities/property";
import { Parameters } from "../../model/common/parameter/parameters";
import express from "express";
import fs from "fs";
import Logger from "../../utilities/logger";
export class ImageController {
    upload = async (req: express.Request, res: express.Response) => {
        try {
            await new Upload().fileUploadMiddleware(req, res);

            if (req.file == undefined) {
                Logger.debug(req.body)
                Logger.error("Please upload a Image!")
                return res
                    .status(400)
                    .send({ message: "Please upload a file!" });
            }
            if (req.file != undefined) {
                Logger.debug(req.body)
                Logger.info(" uploaded file")
                let params = new Parameters(req.body);
                let codec = Property.getMagickPath() + " ";
                let filePath = req.file.path;
                let outputPath = Property.getOutputPath();
                let fileName = req.file.filename.replace(/\.[^/.]+$/, "");
                let outputFormat = req.body.outputFormat;
                let file = fileName + outputFormat;
                let baseUrl =
                    Property.getBaseUrl() +
                    ":" +
                    Property.getPort() +
                    "/images/";

                const commandBuilder = new BuildCmdImage(
                    params,
                    codec,
                    filePath,
                    outputPath,
                    fileName
                );
                new Compiler().execute(commandBuilder.returnCmd());
                res.status(200).send({
                    name: file,
                    url: baseUrl + file,
                });
            }
        } catch (err: any) {
            if (err.code == "LIMIT_FILE_SIZE") {
                Logger.debug(req.body)
                Logger.error("Image size cannot be larger than 2MB!")
                return res.status(500).send({
                    message: "File size cannot be larger than 2MB!",
                });
            }
            res.status(500).send({
                message: `Could not upload the file ${err}`,
            });
        }
    };

    getListFiles = async (req: express.Request, res: express.Response) => {
        const directoryPath = Property.getOutputPath();
        let baseUrl =
            Property.getBaseUrl() + ":" + Property.getPort() + "/images/";

        fs.readdir(directoryPath, function (err, files) {
            if (err) {
                Logger.error("Unable to scan files!")
                res.status(500).send({
                    message: "Unable to scan files!",
                });
            }

            let fileInfos: any = [];

            files.forEach((file) => {
                fileInfos.push({
                    name: file,
                    url: baseUrl + file,
                });
            });

            res.status(200).send(fileInfos);
        });
    };

    download = async (req: express.Request, res: express.Response) => {
        const fileName = req.params.name;
        const directoryPath = Property.getOutputPath();

        res.download(directoryPath + fileName, fileName, (err) => {
            if (err) {
                Logger.error("Could not download the processed file (image) ")
                res.status(500).send({
                    message: "Could not download the file. " + err,
                });
            }
        });
    };
}
