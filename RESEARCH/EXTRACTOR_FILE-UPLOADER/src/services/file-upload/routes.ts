import { Request, Response } from "express";
import { checkPostRequestBody } from "../../middleware/checks";
import { upload } from "./provider/imageProvider";
import { createWorker } from "tesseract.js";

const worker = createWorker({});

export default [
    {
        path: "/extract",
        method: "post",
        handler: [
            checkPostRequestBody,
            async (req: Request, res: Response) => {
                upload(req, res, async (err) => {
                    try {
                        if (err) {
                            return res.status(422).send({
                                errors: [
                                    {
                                        title: "Image Upload Error",
                                        detail: err.message,
                                    },
                                ],
                            });
                        }

                        const file = req.file;
                        if (!file) {
                            return res.status(400).json({
                                status: "failed",
                                code: "400",
                                message: "Please upload file",
                            });
                        }

                        if (file) {
                            await worker.load();
                            await worker.loadLanguage("eng");
                            await worker.initialize("eng");

                            const {
                                data: { text },
                            } = await worker.recognize(
                                process.env.ROOT + file.path
                            );
                            return res.status(200).send(text);
                        }

                        await worker.terminate();
                    } catch (err) {
                        return res.status(200).json({
                            status: "failed",
                            code: "500",
                        });
                    }
                });
            },
        ],
    },
];
