import { Request, Response, Router } from "express";
import express from "express";
import { Routes } from "../routes";

const router = express.Router();

export class RoutesVideo extends Routes {
    constructor(app = express()) {
        super(app);
    }

    getRoutes():void {
        router.get("/video", (req: Request, res: Response) => {
            res.send("I'm in video services now!" + process.env.CONVERTER_PATH);
        });
        this.app.use(router);
    }
}


