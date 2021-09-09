import { Request, Response, Router } from "express";
import express from "express";
import { Routes } from "../routes";

const router = express.Router();

export class RoutesImage extends Routes {
    constructor(app = express()) {
        super(app);
    }

    getRoutes():void {
        router.get("/images", (req: Request, res: Response) => {
            res.send("I'm in image services now!");
        });
        this.app.use(router);
    }
}


