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

const router = express.Router();
export class RoutesVideo extends Routes {
    constructor(app = express()) {
        super(app);
    }

    async getRoutes(): Promise<void> {
        router.post("/videoConverter", [UploadFactory.getInstance(Property.getDBValidation()).uploadFile], new VideoController().videoProcess);
        router.get("/files/:name", new DownloadFile(Property.getOutputPath()).download);
        router.post("/filesMetadata", [new UploadFile().uploadFile], new MetadataController().MetadataProcess);
        router.get("/filesMetadata/:name", new DownloadFile(Property.getOutputPath()).download);
        router.post("/frames", [new UploadFile().uploadFile], new FramesController().frameProcess);
        router.get("/framesZipML/:name", new DownloadFile(Property.getZipPath()).download);
        this.app.use(router);
    }
}
