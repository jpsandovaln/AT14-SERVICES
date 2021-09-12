import express, { Request, Response } from "express";
import { AudioController } from "../../controller/audio/audioController";
import { MetadataController } from "../../controller/metadata/metadataController";
import { UploadFile } from "../../middleware/common/uploader/uploadFile.";
import { DownloadFile } from "../../controller/download/downloadFile";
import { UploadFactory } from "../../middleware/common/uploader/uploadFactory";
import { Property } from "../../utilities/property";
import { Routes } from "../routes";

const router = express.Router();
export class RoutesAudio extends Routes {
    constructor(app = express()) {
        super(app);
    }

    public getRoutes():void {
        router.post("/audioConverter", [UploadFactory.getInstance(Property.getDBValidation()).uploadFile], new AudioController().AudioProcess);
        router.get("/files/:name", new DownloadFile(Property.getOutputPath()).download);
        router.post("/filesMetadata", [new UploadFile().uploadFile], new MetadataController().MetadataProcess);
        router.get("/filesMetadata/:name", new DownloadFile(Property.getOutputPath()).download);
        router.get("/framesZipML/:name", new DownloadFile(Property.getZipPath()).download);
        this.app.use(router);
    }
}
