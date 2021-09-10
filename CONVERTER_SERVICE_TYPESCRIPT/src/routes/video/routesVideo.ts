import { Request, Response, Router } from "express";
import express from "express";
import { Routes } from "../routes";
import { InsertFile } from "../../database/operation/insertFile";
import { VerifyChecksum } from "../../database/operation/verifyChecksum";
import { Property } from "../../utilities/property";
import logger from "../../utilities/logger";
import { UploadFactory } from "../../middleware/common/uploader/uploadFactory";
import { VideoController } from "../../controller/video/videoController";

const router = express.Router();

export class RoutesVideo extends Routes {
    constructor(app = express()) {
        super(app);
    }

    async getRoutes():Promise<void> {
        router.get("/video", (req: Request, res: Response) => { 
            InsertFile.insert('edwin', 'jaime dos', 'patino');  
            console.log('VERIFICANDO EL CHECKSUM: ' + VerifyChecksum.verifyChecksum('patino'));
            res.send("I'm in video services now!" + Property.getBaseUrl());
        });
        router.post("/videoConverter", [UploadFactory.getInstance(Property.getDBValidation()).uploadFile], await new VideoController().videoProcess)
        
        this.app.use(router);  
    }
}


