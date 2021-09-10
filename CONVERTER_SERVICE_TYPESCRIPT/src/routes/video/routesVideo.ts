import { Request, Response, Router } from "express";
import express from "express";
import { Routes } from "../routes";
import { InsertFile } from "../../database/operation/insertFile";
import { VerifyChecksum } from "../../database/operation/verifyChecksum";
import { Property } from "../../utilities/property";

const router = express.Router();

export class RoutesVideo extends Routes {
    constructor(app = express()) {
        super(app);
    }

    getRoutes():void {
        router.get("/video", (req: Request, res: Response) => {
            //const insert = new InsertFile();
            //const verify = new VerifyChecksum();
            console.log(Property.getAudioPath());
            console.log(Property.getVideoPath());
            console.log(Property.getOutputPath())
            console.log(Property.getImagePath());
            console.log(Property.getExifToolPath());
            console.log(Property.getMagickPath());
            InsertFile.insert('edwin', 'jaime dos', 'patino');  
            console.log('VERIFICANDO EL CHECKSUM: ' + VerifyChecksum.verifyChecksum('patino'));
            res.send("I'm in video services now!" + process.env.CONVERTER_PATH);
        });
        this.app.use(router); 
    }
}


