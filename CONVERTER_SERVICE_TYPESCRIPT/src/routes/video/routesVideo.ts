import { Request, Response, Router } from "express";
import express from "express";
import { Routes } from "../routes";
import { Property } from "../../utilities/property";
import logger from "../../utilities/logger";
import { UploadFactory } from "../../middleware/common/uploader/uploadFactory";
import { VideoController } from "../../controller/video/videoController";
import { DownloadFile } from "../../controller/video/downloadFile";

const router = express.Router();

export class RoutesVideo extends Routes {
    constructor(app = express()) {
        super(app);
    }

    async getRoutes():Promise<void> {
        router.get("/video", (req: Request, res: Response) => { 
            res.send("I'm in video services now!  ---   " + Property.getBaseUrl());
        });
        router.post("/videoConverter", [UploadFactory.getInstance(Property.getDBValidation()).uploadFile], new VideoController().videoProcess);
        router.get("/download/:name", new DownloadFile().download); 
        this.app.use(router);
    }
}


