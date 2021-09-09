import { Request, Response, Router } from "express";
import express from "express";
import { Routes } from "../routes";

const router = express.Router();

export class RoutesAudio extends Routes {
    constructor(app = express()) {
        super(app);
    }

    getRoutes():void {
        router.get("/audio", (req: Request, res: Response) => {
            res.send("I'm in audio services now!");
        });
        this.app.use(router);
    }
}


