import path = require("path");
import { DBaseFiles } from "../../database/operation/dBaseFiles";
import { DeleteFileById } from "../../database/operation/deleteFileById";
import { VerifyId } from "../../database/operation/verifyId";
const FileSchema = require("../../database/model/fileSchema");

export class DBaseController {
    DBaseVerifyId = async (req: any, res: any) => {
        try {
            const result = await VerifyId.verifyId(req.params.id);
            res.status(200).send({ result });
        } catch (error) {
            res.send([
                {
                    message: "Something has gone wrong!!!",
                },
            ]);
        }
    };

    DBaseDeleteById = async (req: any, res: any) => {
        try {
            const result = await DeleteFileById.delete(req.params.id);
            res.status(200).send({ result });
        } catch (error) {
            res.send([
                {
                    message: "Something has gone wrong!!!",
                },
            ]);
        }
    };

    DBaseFiles = async (req: any, res: any) => {
        try {
            const result = await DBaseFiles.files();
            res.status(200).send({ result });
        } catch (error) {
            res.send([
                {
                    message: "Something has gone wrong!!!",
                },
            ]);
        }
    };
}
