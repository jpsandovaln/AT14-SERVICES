import express, { Request, Response } from "express";
import { AudioController } from "../../controller/audio/audioController";
import { UploadFile } from "../../middleware/common/uploader/uploadFile.";
import { DownloadFile } from "../../controller/download/downloadFile";
import { Property } from "../../utilities/property";
import { Routes } from "../routes";
import cors from "cors";

const router = express.Router();
export class RoutesAudio extends Routes {
    constructor(app = express()) {
        super(app);
    }

    public getRoutes():void {
        router.post("/audioConverter", [new UploadFile().uploadFile], new AudioController().AudioProcess);
        router.get("/files/:name", new DownloadFile(Property.getOutputPath()).download);
        this.app.use(router);
        this.app.use(cors());
    }
}
