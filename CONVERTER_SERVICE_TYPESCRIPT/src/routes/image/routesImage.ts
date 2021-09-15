import express, { Request, Response } from "express";
import { ImageController } from "../../controller/image/imageController";
import { Routes } from "../routes";
import cors from "cors";

const router = express.Router();
const imageController = new ImageController();

export class RoutesImage extends Routes {
    constructor(app = express()) {
        super(app);
    }

    getRoutes(): void {
        router.post("/imageConverter", imageController.upload);
        router.get("/images", imageController.getListFiles);
        router.get("/images/:name", imageController.download);
        this.app.use(router);
        this.app.use(cors());
    }
}
