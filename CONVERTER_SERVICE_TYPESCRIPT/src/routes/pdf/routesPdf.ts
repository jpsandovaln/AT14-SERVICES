import express from "express";
import { Routes } from "../routes";
import { Property } from "../../utilities/property";
import logger from "../../utilities/logger";
import { UploadFactory } from "../../middleware/common/uploader/uploadFactory";
import { VideoController } from "../../controller/video/videoController";
import { DownloadFile } from "../../controller/download/downloadFile";
import { MetadataController } from "../../controller/metadata/metadataController";
import { UploadFile } from "../../middleware/common/uploader/uploadFile.";
import { FramesController } from "../../controller/video/videoFrames";
import { PdfToImageController } from "../../controller/pdf/pdfToImageController";

const router = express.Router();
export class RoutesPdf extends Routes {
    constructor(app = express()) {
        super(app);
    }

    async getRoutes(): Promise<void> {
        router.post("/convertPdftoImage/", [new UploadFile().uploadFile], new PdfToImageController().pdfToImageProcess);
        router.get("/convertPdftoImage/:name", new DownloadFile(Property.getImagePath()).download);
        this.app.use(router);
    }
}
