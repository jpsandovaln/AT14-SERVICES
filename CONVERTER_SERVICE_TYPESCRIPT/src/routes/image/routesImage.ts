import express, { Request, Response } from "express";
import { ImageController } from "../../controller/image/imageController";
import { Routes } from "../routes";

const router = express.Router();

export class RoutesImage extends Routes {
    constructor(app = express()) {
        super(app);
    }

    getRoutes(): void {
        router.post("/imageConverter", new ImageController().upload);
        router.get("/files", new ImageController().getListFiles);
        router.get("/files/:name", new ImageController().download);
        this.app.use(router);
    }
}
