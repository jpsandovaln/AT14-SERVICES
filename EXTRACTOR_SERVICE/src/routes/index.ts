import { FileController } from "../controller/file.controller";
import express from "express";

const controller = new FileController();
const router = express.Router();

class Routes {
    constructor(app = express()) {
        router.post("/upload", controller.extractText);
        router.post("/extractToPDF", controller.extractToPDF);
        router.post("/extractCroppedImage", controller.extractCroppedImage);
        app.use(router);
    }
}
export { Routes };
