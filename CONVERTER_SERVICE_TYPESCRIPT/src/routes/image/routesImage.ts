import express, { Request, Response } from "express";
import { ImageController } from "../../controller/image/imageController";
import { Routes } from "../routes";

const router = express.Router();
const imageController = new ImageController();

export class RoutesImage extends Routes {
    constructor(app = express()) {
        super(app);
    }

    getRoutes(): void {
        router.post("/imageConverter", imageController.upload);
        router.get("/files", imageController.getListFiles);
        router.get("/files/:name", imageController.download);
        this.app.use(router);
    }
}
